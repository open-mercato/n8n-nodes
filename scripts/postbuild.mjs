/**
 * Post-build script: copies icons and patches package.json for dist/.
 * Replaces gulpfile.js — zero dependencies, uses only node:fs and node:path.
 */

import { cpSync, readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, dirname, relative } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = resolve(ROOT, 'dist');

// 1. Copy icons/ to dist/icons/
const iconsDir = resolve(ROOT, 'icons');
if (existsSync(iconsDir)) {
	cpSync(iconsDir, resolve(DIST, 'icons'), { recursive: true });
	console.log('Copied icons/ -> dist/icons/');
}

// 2. Copy node and credential SVG icons to their dist counterparts
function copySvgIcons(baseDir) {
	const srcDir = resolve(ROOT, baseDir);
	if (!existsSync(srcDir)) return;

	for (const entry of readdirSync(srcDir)) {
		const subDir = join(srcDir, entry);
		if (!statSync(subDir).isDirectory()) continue;
		const svgPath = join(subDir, 'openmercato.svg');
		if (existsSync(svgPath)) {
			const destPath = join(DIST, baseDir, entry, 'openmercato.svg');
			mkdirSync(dirname(destPath), { recursive: true });
			cpSync(svgPath, destPath);
			console.log(`Copied ${relative(ROOT, svgPath)} -> ${relative(ROOT, destPath)}`);
		}
	}
}

copySvgIcons('nodes');
copySvgIcons('credentials');

// 3. Copy and patch package.json to dist/
const pkg = JSON.parse(readFileSync(resolve(ROOT, 'package.json'), 'utf-8'));

if (pkg.main) {
	pkg.main = pkg.main.replace(/^dist\//, '');
}
if (pkg.n8n) {
	if (pkg.n8n.nodes) {
		pkg.n8n.nodes = pkg.n8n.nodes.map((p) => p.replace(/^dist\//, ''));
	}
	if (pkg.n8n.credentials) {
		pkg.n8n.credentials = pkg.n8n.credentials.map((p) => p.replace(/^dist\//, ''));
	}
}

writeFileSync(resolve(DIST, 'package.json'), JSON.stringify(pkg, null, '\t') + '\n');
console.log('Copied and patched package.json -> dist/package.json');
