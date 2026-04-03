import nextCorePlugin from '@next/eslint-plugin-next';
import { globalIgnores } from 'eslint/config';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import { plugin as typescriptEslintPlugin } from 'typescript-eslint';

import reactifyConfig from './index.js';

/**
 * Single plugin instances for every flat-config slice. eslint-config-next and reactify both
 * register the same plugin keys; with pnpm, `eslint-plugin-import` (and others) can resolve
 * to different module instances, which triggers "Cannot redefine plugin".
 */
const canonicalPlugins = {
    '@next/next': nextCorePlugin,
    '@typescript-eslint': typescriptEslintPlugin,
    import: importPlugin,
    'jsx-a11y': jsxA11yPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
};

function canonicalizePlugins(slice) {
    if (!slice || typeof slice !== 'object' || slice.plugins == null || typeof slice.plugins !== 'object') {
        return slice;
    }
    const plugins = { ...slice.plugins };
    let changed = false;
    for (const [key, canonical] of Object.entries(canonicalPlugins)) {
        if (key in plugins && plugins[key] !== canonical) {
            plugins[key] = canonical;
            changed = true;
        }
    }
    return changed ? { ...slice, plugins } : slice;
}

/**
 * Use eslint-config-next's flat arrays directly (no FlatCompat) so the ESLint language
 * server can serialize the config. Align plugin objects across Next + reactify as above.
 */
export default [
    ...coreWebVitals.map(canonicalizePlugins),
    ...nextTypescript.map(canonicalizePlugins),
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
    ...reactifyConfig.map(canonicalizePlugins),
];
