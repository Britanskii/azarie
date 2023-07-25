import {defineConfig} from "vite"
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"
import {preact} from "@preact/preset-vite"

export default defineConfig({
	base: "https://britanskii.github.io/azarie/",
	plugins: [
		preact(), tsconfigPaths()
	],
	resolve: {
		alias: [
			{find: "@", replacement: path.resolve(__dirname, "src")},
		],
	},
})
