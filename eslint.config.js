import eslintPluginAstro from 'eslint-plugin-astro';
import { configs } from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/', '.astro/', 'node_modules/'],
  },
  ...configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  prettierConfig,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
];
