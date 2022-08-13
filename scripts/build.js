const fs = require('fs');
const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');

fs.mkdirSync('build');

console.log('[1] Copying HTML File...');
fs.copyFileSync('src/index.html', 'build/index.html');

console.log('[2] Bundling Scripts...');
esbuild.build({
	entryPoints: ['src/main.ts', 'src/main.sass'],
	outdir: 'build',
	watch: true,
	bundle: true,
	minify: true,
	keepNames: false,
	legalComments: 'none',
	plugins: [sassPlugin()],
}).then(() => {
	console.log('[X] Build Finished Successfully');
})
