import { globalIgnores } from 'eslint/config';
import coreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

import reactifyConfig from './index.js';

/**
 * Use eslint-config-next's flat arrays directly. FlatCompat rewrites legacy extends into
 * objects that, with eslint-plugin-react's internal config graph, can produce structures
 * the ESLint language server cannot JSON-serialize ("Converting circular structure to JSON").
 *
 * Reactify slices keep their own `plugins` entries. ESLint merges configs per file; only
 * matching blocks apply. Next's `files` glob omits e.g. `.cjs` / `.mjsx`, but reactify
 * still matches those — stripping shared plugins from reactify used to avoid rare duplicate
 * plugin instances, but then left `react/*` rules with no `react` plugin in the merged
 * config for those paths.
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
    ...reactifyConfig,
];
