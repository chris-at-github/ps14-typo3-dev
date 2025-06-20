import { defineConfig } from "vite";
import typo3 from "vite-plugin-typo3";
import path from "path";

export default defineConfig({
	plugins: [
		typo3()
	],
});