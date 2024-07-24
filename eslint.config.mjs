import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { fixupConfigRules } from '@eslint/compat';
import i18nPlugin from 'eslint-plugin-i18next';
import ReactHooksPlugin from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.mjs'],
    },
    {
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            i18next: i18nPlugin,
            prettier: prettierPlugin,
            'react-hooks': ReactHooksPlugin,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            'react/react-in-jsx-scope': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'i18next/no-literal-string': 2,
            '@typescript-eslint/ban-ts-comment': 'off',
            'react/display-name': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
        },
    },
];
