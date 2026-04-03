import { globalIgnores } from 'eslint/config';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

import reactifyConfig from './index.js';

/**
 * Plugin keys registered by eslint-config-next flat config (base + typescript blocks).
 * Removing them from reactify slices avoids ESLint 9 "Cannot redefine plugin …" when both
 * configs appear in the same chain; rules/settings from reactify still apply.
 *
 * @see https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next dist/index.js
 */
const pluginsOwnedByNext = new Set([
    '@next/next',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
]);

function stripNextDuplicatePlugins(slice) {
    if (!slice || typeof slice !== 'object' || !slice.plugins || typeof slice.plugins !== 'object') {
        return slice;
    }
    const plugins = { ...slice.plugins };
    let changed = false;
    for (const key of pluginsOwnedByNext) {
        if (key in plugins) {
            delete plugins[key];
            changed = true;
        }
    }
    if (!changed) {
        return slice;
    }
    if (Object.keys(plugins).length === 0) {
        const rest = { ...slice };
        delete rest.plugins;
        return rest;
    }
    return { ...slice, plugins };
}

/**
 * Use eslint-config-next's flat arrays directly. FlatCompat rewrites legacy extends into
 * objects that, with eslint-plugin-react's internal config graph, can produce structures
 * the ESLint language server cannot JSON-serialize ("Converting circular structure to JSON").
 */
export default [
    ...coreWebVitals,
    ...nextTypescript,
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
    ...reactifyConfig.map(stripNextDuplicatePlugins),
];
