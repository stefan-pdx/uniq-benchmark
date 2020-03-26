import resolve from "@rollup/plugin-node-resolve";

import svelte from "rollup-plugin-svelte";
import copy from "rollup-plugin-copy";

export default {
    input: "src/main.js",
    output: {
        file: "public/build/main.js",
        format: "iife",
        name: "app"
    },
    plugins: [
        resolve(),
        svelte(),
        copy({
            targets: [{
                src: "src/*.worker.js", dest: "public/build"
            }]
        })
    ]
}