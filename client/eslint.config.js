import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        ignores: ["dist"], // Ignore dist folder
    },
    {
        files: ["**/*.{ts,tsx}"], // Target TypeScript files
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        plugins: {
            "@typescript-eslint": ts,
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...ts.configs.recommended.rules, // TypeScript recommended rules
            ...reactHooks.configs.recommended.rules,
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },
];
