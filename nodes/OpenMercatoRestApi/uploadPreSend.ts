import FormData from 'form-data';
import type { IHttpRequestOptions, INodeProperties } from 'n8n-workflow';

/**
 * Upload operation identifiers that need multipart/form-data handling.
 */
const UPLOAD_OPERATIONS = [
	'fms_documents_post_fms_documents_upload',
	'fms_documents_post_fms_documents_invoices_upload',
];

/**
 * preSend hook that converts a JSON body request into multipart/form-data
 * with the binary file attached from the input item.
 *
 * Used by declarative routing on upload operations.
 */
export async function uploadFilePreSend(
	this: import('n8n-workflow').IExecuteSingleFunctions,
	requestOptions: IHttpRequestOptions,
): Promise<IHttpRequestOptions> {
	const binaryPropertyName = this.getNodeParameter('binaryPropertyName', 'data') as string;
	const binaryData = this.helpers.assertBinaryData(binaryPropertyName);
	const buffer = await this.helpers.getBinaryDataBuffer(binaryPropertyName);

	const formData = new FormData();

	const fileName = binaryData.fileName || 'file';
	const mimeType = binaryData.mimeType || 'application/octet-stream';
	formData.append('file', buffer, { filename: fileName, contentType: mimeType });

	// Move remaining body fields into the form data
	const body = requestOptions.body;
	if (body && typeof body === 'object' && !Buffer.isBuffer(body)) {
		for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
			if (key === 'file' || value === undefined || value === null || value === '') continue;
			formData.append(key, String(value));
		}
	}

	requestOptions.body = formData;

	// Remove Content-Type so FormData sets it with the correct multipart boundary
	if (requestOptions.headers) {
		delete requestOptions.headers['Content-Type'];
		delete requestOptions.headers['content-type'];
	}

	return requestOptions;
}

type AnyRecord = Record<string, unknown>;

/**
 * Patch the auto-generated properties array to support file uploads:
 * 1. Inject preSend hook on upload operation routing
 * 2. Replace file_string fields with binaryPropertyName fields
 * 3. Remove bodyInputMode and jsonBody properties for upload ops
 * 4. Clean bodyInputMode references from collection displayOptions
 */
export function patchUploadProperties(properties: INodeProperties[]): INodeProperties[] {
	const uploadSet = new Set(UPLOAD_OPERATIONS);

	return properties
		.filter((prop) => {
			const name = prop.name as string;

			// Remove bodyInputMode toggle for upload operations
			if (name.startsWith('bodyInputMode_') && uploadSet.has(name.replace('bodyInputMode_', ''))) {
				return false;
			}

			// Remove jsonBody field for upload operations
			if (name.startsWith('jsonBody_') && uploadSet.has(name.replace('jsonBody_', ''))) {
				return false;
			}

			return true;
		})
		.map((prop) => {
			// Inject preSend on upload operation routing definitions
			if (prop.name === 'operation') {
				const options = prop.options as AnyRecord[] | undefined;
				if (!options) return prop;

				const patchedOptions = options.map((opt) => {
					if (!uploadSet.has(opt.value as string)) return opt;

					const routing = opt.routing as AnyRecord | undefined;
					if (!routing) return opt;

					return {
						...opt,
						routing: {
							...routing,
							send: {
								...(routing.send as AnyRecord | undefined),
								preSend: [uploadFilePreSend],
							},
						},
					};
				});

				return { ...prop, options: patchedOptions } as unknown as INodeProperties;
			}

			// Replace file_string fields with binaryPropertyName for upload operations
			if (prop.name === 'file_string') {
				const ops = (
					(prop.displayOptions as AnyRecord)?.show as AnyRecord
				)?.operation as string[];
				if (ops?.some((op) => uploadSet.has(op))) {
					return {
						displayName: 'Binary Property',
						name: 'binaryPropertyName',
						type: 'string',
						default: 'data',
						required: true,
						description:
							'Name of the binary property containing the file data from a previous node (e.g. HTTP Request, Read Binary File)',
						displayOptions: prop.displayOptions,
					} as INodeProperties;
				}
			}

			// Clean bodyInputMode_ references from collection displayOptions.show
			if (prop.type === 'collection') {
				const show = (prop.displayOptions as AnyRecord)?.show as AnyRecord | undefined;
				if (!show) return prop;

				const bodyInputKey = Object.keys(show).find(
					(k) => k.startsWith('bodyInputMode_') && uploadSet.has(k.replace('bodyInputMode_', '')),
				);
				if (bodyInputKey) {
					const { [bodyInputKey]: _, ...restShow } = show;
					return {
						...prop,
						displayOptions: {
							...(prop.displayOptions as AnyRecord),
							show: restShow,
						},
					} as INodeProperties;
				}
			}

			return prop;
		});
}
