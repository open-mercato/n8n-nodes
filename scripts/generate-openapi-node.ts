/**
 * Generate n8n node properties from the OpenMercato OpenAPI spec
 * using @algolia/n8n-openapi-node.
 *
 * The library has a hardcoded filter that only includes paths matching /^\/\d+\//.
 * We work around this by:
 *   1. Pre-processing the spec to prefix all paths with /1/
 *   2. Generating the properties
 *   3. Post-processing to remove the /1/ prefix from routing URLs
 */

import * as fs from 'fs';
import * as path from 'path';
import { generateN8NNodes } from '@algolia/n8n-openapi-node';

const DEFAULT_SPEC_URL = 'https://openmercato.freighttech.org/api/docs/openapi';
const SPEC_PATH = path.resolve(__dirname, '../src/generated/openapi.json');
const PROCESSED_SPEC_PATH = path.resolve(__dirname, '../src/generated/openapi-processed.json');
const OUTPUT_PATH = path.resolve(__dirname, '../nodes/OpenMercatoRestApi/properties.ts');

function getSpecUrl(): string {
	const urlIndex = process.argv.indexOf('--url');
	if (urlIndex !== -1 && process.argv[urlIndex + 1]) {
		return process.argv[urlIndex + 1];
	}
	return DEFAULT_SPEC_URL;
}

function getFilterPatterns(): string[] {
	const filterIndex = process.argv.indexOf('--filter');
	if (filterIndex !== -1 && process.argv[filterIndex + 1]) {
		return process.argv[filterIndex + 1].split(',').map((s) => s.trim().toLowerCase());
	}
	return [];
}

const SPEC_URL = getSpecUrl();
const FILTER_PATTERNS = getFilterPatterns();

async function downloadSpec(): Promise<void> {
	console.log(`Downloading OpenAPI spec from ${SPEC_URL}...`);
	const response = await fetch(SPEC_URL);
	if (!response.ok) {
		throw new Error(`Failed to download spec: ${response.status} ${response.statusText}`);
	}
	const spec = await response.json();
	fs.writeFileSync(SPEC_PATH, JSON.stringify(spec, null, 2));
	console.log(
		`Spec saved to ${SPEC_PATH} (${(fs.statSync(SPEC_PATH).size / 1024 / 1024).toFixed(1)} MB)`,
	);
}

/**
 * Resolve a $ref string like "#/components/schemas/FooBar" against the spec
 */
function resolveRef(spec: Record<string, unknown>, ref: string): unknown {
	if (!ref.startsWith('#/')) return undefined;
	const parts = ref.slice(2).split('/');
	let current: unknown = spec;
	for (const part of parts) {
		if (current === null || current === undefined || typeof current !== 'object') return undefined;
		current = (current as Record<string, unknown>)[part];
	}
	return current;
}

/**
 * Recursively inline all $ref references in an object.
 * This is needed because the library doesn't fully dereference parameter schemas.
 */
function inlineRefs(
	spec: Record<string, unknown>,
	obj: unknown,
	seen = new Set<string>(),
): unknown {
	if (obj === null || obj === undefined) return obj;

	if (Array.isArray(obj)) {
		return obj.map((item) => inlineRefs(spec, item, seen));
	}

	if (typeof obj === 'object') {
		const record = obj as Record<string, unknown>;

		// If this is a $ref object, resolve it
		if (typeof record['$ref'] === 'string') {
			const refPath = record['$ref'] as string;
			if (seen.has(refPath)) {
				// Circular reference - return as string type to avoid infinite loop
				return { type: 'string', description: `Circular ref: ${refPath}` };
			}
			const resolved = resolveRef(spec, refPath);
			if (resolved !== undefined) {
				seen.add(refPath);
				const result = inlineRefs(spec, resolved, seen);
				seen.delete(refPath);
				return result;
			}
			// Can't resolve - default to string
			return { type: 'string' };
		}

		// Recurse into all properties
		const result: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(record)) {
			result[key] = inlineRefs(spec, value, seen);
		}
		return result;
	}

	return obj;
}

/**
 * Simplify anyOf patterns like [{ type: "null" }, { type: "string" }]
 * into { type: "string", nullable: true } so the library can handle them.
 */
function simplifyAnyOf(spec: Record<string, unknown>, obj: unknown): unknown {
	if (obj === null || obj === undefined) return obj;

	if (Array.isArray(obj)) {
		return obj.map((item) => simplifyAnyOf(spec, item));
	}

	if (typeof obj === 'object') {
		const record = obj as Record<string, unknown>;

		// Check for anyOf with nullable pattern
		if (Array.isArray(record.anyOf) && record.anyOf.length === 2) {
			// Resolve $refs in anyOf items first
			const resolved = (record.anyOf as Array<Record<string, unknown>>).map((item) => {
				if (typeof item['$ref'] === 'string') {
					const ref = resolveRef(spec, item['$ref'] as string);
					return ref && typeof ref === 'object' ? (ref as Record<string, unknown>) : item;
				}
				return item;
			});
			const nullItem = resolved.find((i) => i.type === 'null');
			const realItem = resolved.find((i) => i.type !== 'null');
			if (nullItem && realItem) {
				// Replace anyOf with the non-null type + nullable
				const { anyOf, ...rest } = record;
				return simplifyAnyOf(spec, { ...rest, ...realItem, nullable: true });
			}
		}

		// Recurse into all properties
		const result: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(record)) {
			result[key] = simplifyAnyOf(spec, value);
		}
		return result;
	}

	return obj;
}

function preprocessSpec(): void {
	console.log('Pre-processing spec...');
	const spec = JSON.parse(fs.readFileSync(SPEC_PATH, 'utf-8'));

	// 0a. Filter paths by tag if --filter is provided
	if (FILTER_PATTERNS.length > 0) {
		console.log(`  Filtering endpoints by tags matching: ${FILTER_PATTERNS.join(', ')}`);
		const originalCount = Object.keys(spec.paths || {}).length;
		const filteredPaths: Record<string, unknown> = {};
		for (const [pathKey, pathValue] of Object.entries(spec.paths || {})) {
			const pathObj = pathValue as Record<string, unknown>;
			let include = false;
			for (const methodValue of Object.values(pathObj)) {
				if (!methodValue || typeof methodValue !== 'object') continue;
				const op = methodValue as Record<string, unknown>;
				const tags = (op.tags as string[]) || [];
				if (tags.some((tag) => FILTER_PATTERNS.some((pattern) => tag.toLowerCase().includes(pattern)))) {
					include = true;
					break;
				}
			}
			if (include) {
				filteredPaths[pathKey] = pathValue;
			}
		}
		spec.paths = filteredPaths;
		const filteredCount = Object.keys(filteredPaths).length;
		console.log(`  Kept ${filteredCount} of ${originalCount} paths`);
	}

	// 0b. Simplify anyOf nullable patterns in component schemas and paths
	console.log('  Simplifying anyOf nullable patterns...');
	let anyOfCount = 0;
	const before = JSON.stringify(spec);
	if (spec.components?.schemas) {
		spec.components.schemas = simplifyAnyOf(spec, spec.components.schemas);
	}
	if (spec.paths) {
		spec.paths = simplifyAnyOf(spec, spec.paths);
	}
	const after = JSON.stringify(spec);
	// Count how many anyOf patterns were simplified
	const beforeCount = (before.match(/"anyOf"/g) || []).length;
	const afterCount = (after.match(/"anyOf"/g) || []).length;
	anyOfCount = beforeCount - afterCount;
	console.log(`  Simplified ${anyOfCount} anyOf nullable patterns (${beforeCount} -> ${afterCount} remaining)`);

	// 1. Inline all $ref references and fix parameter schemas
	console.log('  Resolving $ref references and fixing schemas...');
	let fixCount = 0;
	for (const pathValue of Object.values(spec.paths || {})) {
		const pathObj = pathValue as Record<string, unknown>;
		for (const methodValue of Object.values(pathObj)) {
			if (!methodValue || typeof methodValue !== 'object') continue;
			const op = methodValue as Record<string, unknown>;
			if (Array.isArray(op.parameters)) {
				op.parameters = op.parameters.map((param: Record<string, unknown>) => {
					if (
						!param.schema ||
						(typeof param.schema === 'object' &&
							Object.keys(param.schema as Record<string, unknown>).length === 0)
					) {
						// Empty or missing schema - default to string
						fixCount++;
						return { ...param, schema: { type: 'string' } };
					}
					// Recursively inline all $refs in the schema
					const inlined = inlineRefs(spec, param.schema);
					if (JSON.stringify(inlined) !== JSON.stringify(param.schema)) {
						fixCount++;
					}
					return { ...param, schema: inlined };
				});
			}

			// Also inline $refs in requestBody schemas
			if (op.requestBody && typeof op.requestBody === 'object') {
				op.requestBody = inlineRefs(spec, op.requestBody);
			}
		}
	}
	console.log(`  Fixed ${fixCount} parameter schemas`);

	// 2. Prefix all paths with /1/ so they pass the library's filter
	console.log('  Adding /1/ prefix to paths...');
	const newPaths: Record<string, unknown> = {};
	for (const [pathKey, pathValue] of Object.entries(spec.paths || {})) {
		const newKey = `/1${pathKey}`;
		newPaths[newKey] = pathValue;
	}
	spec.paths = newPaths;

	fs.writeFileSync(PROCESSED_SPEC_PATH, JSON.stringify(spec, null, 2));
	console.log(`  Processed spec saved to ${PROCESSED_SPEC_PATH}`);
}

/**
 * Recursively walk an object and fix any routing URLs by removing the /1 prefix
 */
function removePathPrefix(obj: unknown): unknown {
	if (obj === null || obj === undefined) return obj;

	if (Array.isArray(obj)) {
		return obj.map(removePathPrefix);
	}

	if (typeof obj === 'object') {
		const result: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
			if (key === 'url' && typeof value === 'string' && value.startsWith('=/1/')) {
				// Fix routing URL: =/1/dashboards/... -> =/dashboards/...
				result[key] = '=' + value.slice(3);
			} else {
				result[key] = removePathPrefix(value);
			}
		}
		return result;
	}

	return obj;
}

/**
 * Operations that use multipart/form-data file uploads.
 * These are handled by uploadPreSend.ts at runtime, so we skip JSON body mode for them.
 */
const UPLOAD_OPERATIONS = new Set([
	'fms_documents_post_fms_documents_upload',
	'fms_documents_post_fms_documents_invoices_upload',
]);

/**
 * Add a "Body Input Mode" toggle for POST/PUT operations, allowing users to
 * switch between the generated form fields and a raw JSON body input.
 */
function addJsonBodyMode(properties: unknown[]): unknown[] {
	type AnyRecord = Record<string, unknown>;

	// 1. Collect all POST/PUT operation values and their resources from operation props
	const postPutOps: Array<{ value: string; resource: string }> = [];
	for (const prop of properties) {
		const p = prop as AnyRecord;
		if (p.name !== 'operation') continue;
		const resource = ((p.displayOptions as AnyRecord)?.show as AnyRecord)?.resource as string[];
		if (!resource?.[0]) continue;
		for (const opt of (p.options as AnyRecord[]) || []) {
			if (UPLOAD_OPERATIONS.has(opt.value as string)) continue;
			const method = ((opt.routing as AnyRecord)?.request as AnyRecord)?.method as string;
			if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
				postPutOps.push({ value: opt.value as string, resource: resource[0] });
			}
		}
	}

	if (postPutOps.length === 0) return properties;

	// 2. Build a set of operation values for quick lookup
	const postPutSet = new Set(postPutOps.map((o) => o.value));

	// 3. Walk properties, inject input mode toggle + JSON field for each matching collection
	const result: unknown[] = [];
	const processed = new Set<string>();

	for (const prop of properties) {
		const p = prop as AnyRecord;

		// Detect collection properties that send body fields for a POST/PUT operation
		if (p.type === 'collection') {
			const ops = ((p.displayOptions as AnyRecord)?.show as AnyRecord)?.operation as string[];
			const resources = ((p.displayOptions as AnyRecord)?.show as AnyRecord)
				?.resource as string[];
			if (ops?.length === 1 && postPutSet.has(ops[0]) && !processed.has(ops[0])) {
				const opValue = ops[0];
				const resource = resources?.[0] || postPutOps.find((o) => o.value === opValue)!.resource;
				processed.add(opValue);

				// a) Input Mode toggle
				result.push({
					displayName: 'Body Input Mode',
					name: `bodyInputMode_${opValue}`,
					type: 'options',
					default: 'fields',
					description: 'Choose how to provide the request body',
					options: [
						{ name: 'Form Fields', value: 'fields' },
						{ name: 'Raw JSON', value: 'json' },
					],
					displayOptions: {
						show: { resource: [resource], operation: [opValue] },
					},
				});

				// b) Existing collection — only show in "fields" mode
				result.push({
					...p,
					displayOptions: {
						show: {
							...((p.displayOptions as AnyRecord)?.show as AnyRecord),
							[`bodyInputMode_${opValue}`]: ['fields'],
						},
					},
				});

				// c) JSON body field — only show in "json" mode
				result.push({
					displayName: 'JSON Body',
					name: `jsonBody_${opValue}`,
					type: 'json',
					default: '{}',
					description: 'Raw JSON body to send with the request',
					typeOptions: { rows: 10 },
					displayOptions: {
						show: {
							resource: [resource],
							operation: [opValue],
							[`bodyInputMode_${opValue}`]: ['json'],
						},
					},
					routing: {
						request: {
							body: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
						},
					},
				});

				continue; // replaced the original collection
			}
		}

		result.push(prop);
	}

	console.log(`Added JSON body mode for ${processed.size} POST/PUT/PATCH operations`);
	return result;
}

async function generate(): Promise<void> {
	const forceDownload = process.argv.includes('--download') || process.argv.includes('--url');

	// Download spec if not present, --download flag, or --url provided
	if (!fs.existsSync(SPEC_PATH) || forceDownload) {
		await downloadSpec();
	} else {
		console.log(`Using existing spec at ${SPEC_PATH}`);
	}

	// Pre-process: add /1/ prefix to paths
	preprocessSpec();

	// Generate n8n properties
	console.log('Generating n8n node properties...');
	const properties = await generateN8NNodes(PROCESSED_SPEC_PATH);

	if (!properties || properties.length === 0) {
		throw new Error('No properties generated! Check if the spec is valid.');
	}

	console.log(`Generated ${properties.length} property definitions`);

	// Post-process: remove the /1/ prefix from routing URLs
	const fixedProperties = removePathPrefix(properties);

	// Post-process: add JSON body input mode for POST/PUT operations
	const finalProperties = addJsonBodyMode(fixedProperties as unknown[]);

	// Count resources and operations
	const resourceProp = (
		finalProperties as Array<{ name: string; options?: Array<{ value: string }> }>
	).find((p) => p.name === 'resource');
	const operationProps = (finalProperties as Array<{ name: string }>).filter(
		(p) => p.name === 'operation',
	);

	if (resourceProp?.options) {
		console.log(`Resources: ${resourceProp.options.length}`);
		for (const opt of resourceProp.options) {
			console.log(`  - ${opt.value}`);
		}
	}
	console.log(`Operation groups: ${operationProps.length}`);

	// Ensure output directory exists
	const outputDir = path.dirname(OUTPUT_PATH);
	if (!fs.existsSync(outputDir)) {
		fs.mkdirSync(outputDir, { recursive: true });
	}

	// Write TypeScript file
	const fileContent = `/* eslint-disable */
/**
 * AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
 *
 * Generated from OpenMercato OpenAPI spec using @algolia/n8n-openapi-node
 * Run \`npm run generate:openapi\` to regenerate.
 *
 * Source: ${SPEC_URL}
 * Generated: ${new Date().toISOString()}
 */

import { INodeProperties } from 'n8n-workflow';

const properties: INodeProperties[] = ${JSON.stringify(finalProperties, null, '\t')};

export default properties;
`;

	fs.writeFileSync(OUTPUT_PATH, fileContent);
	console.log(`\nProperties written to ${OUTPUT_PATH}`);

	// Clean up processed spec
	if (fs.existsSync(PROCESSED_SPEC_PATH)) {
		fs.unlinkSync(PROCESSED_SPEC_PATH);
		console.log('Cleaned up processed spec.');
	}

	console.log('Done!');
}

generate().catch((err) => {
	console.error('Generation failed:', err);
	process.exit(1);
});
