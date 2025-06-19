import { defineConfig } from "vite";
import typo3 from "vite-plugin-typo3";
import checker from 'vite-plugin-checker'
import path from "path";

export default defineConfig({
	plugins: [
		typo3()
		// checker({
		// 	stylelint: {
		// 		files: ['./src/**/*.{scss,css,sass}']
		// 	}
		// })
	],
});