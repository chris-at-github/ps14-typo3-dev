import { webfont } from 'webfont';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath from the 'url' module

// Correctly define __dirname for ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const result = await webfont({
	files: 'packages/ps14_site/Resources/Private/Source/Svg/Font/*.svg',
	fontName: 'iconfont',
	formats: ['woff2'],
	dest: 'test/fonts',
	template: path.resolve(__dirname, "./template.scss.njk"),
	templateClassName: 'icon-font',
	templateFontPath: 'EXT:ps14_site/Resources/Public/Fonts/',
});

await mkdir('public/fonts', { recursive: true });
await Promise.all([
	writeFile('packages/ps14_site/Resources/Public/Fonts/iconfont.woff2', result.woff2),
	writeFile('packages/ps14_site/Resources/Private/Source/Scss/bootstrap/_iconfont.scss', result.template),
]);