import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import eslint from "vite-plugin-eslint";
import AutoImport from "unplugin-auto-import/vite";
import removeConsole from "vite-plugin-remove-console";
import { compression } from "vite-plugin-compression2";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue", "vue-router", "vue-i18n"],
            eslintrc: {
                enabled: true,
                filepath: "./.eslintrc-auto-import.json",
                globalsPropValue: true,
            },
        }),
        Components({
            resolvers: [],
        }),
        eslint({
            lintOnStart: true,
            cache: false,
            include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
        }),
        legacy({
            targets: ["defaults", "ie >= 11", "chrome 52", "android >= 7"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
            renderLegacyChunks: true,
            polyfills: [
                "es.symbol",
                "es.array.filter",
                "es.promise",
                "es.promise.finally",
                "es/map",
                "es/set",
                "es.array.for-each",
                "es.object.define-properties",
                "es.object.define-property",
                "es.object.get-own-property-descriptor",
                "es.object.get-own-property-descriptors",
                "es.object.keys",
                "es.object.to-string",
                "web.dom-collections.for-each",
                "esnext.global-this",
                "esnext.string.match-all",
            ],
        }),
        removeConsole(),
        compression(),
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        port: 5525,
    },
    esbuild: {
        drop: ["console", "debugger"],
    },
    optimizeDeps: {
        include: [
            "axios",
            "dayjs",
            "lodash-es",
            "mqtt",
            "object-to-formdata",
            "pinia",
            "pinia-plugin-persistedstate",
            "vue-router",
            "nprogress",
        ],
    },
});
