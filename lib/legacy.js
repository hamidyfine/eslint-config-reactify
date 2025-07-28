/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-require-imports */
const stylisticPlugin = require('@stylistic/eslint-plugin');
const stylisticPluginMigrate = require('@stylistic/eslint-plugin-migrate');
const pluginQuery = require('@tanstack/eslint-plugin-query');
const pluginRouter = require('@tanstack/eslint-plugin-router');
const importPlugin = require('eslint-plugin-import');
const importNewlines = require('eslint-plugin-import-newlines');
const jest = require('eslint-plugin-jest');
const jsdoc = require('eslint-plugin-jsdoc');
const json = require('eslint-plugin-json');
const noSecret = require('eslint-plugin-no-secrets');
const perfectionist = require('eslint-plugin-perfectionist');
const reactPlugin = require('eslint-plugin-react');
const reactHookPlugin = require('eslint-plugin-react-hooks');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const sonarjs = require('eslint-plugin-sonarjs');
const tsdoc = require('eslint-plugin-tsdoc');

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:@stylistic/migrate/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@tanstack/router/recommended',
        'plugin:@tanstack/query/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:jest/recommended',
    ],
    ignorePatterns: [
        'dist', 'build', 'coverage', 'node_modules', 'public', 'out', 'storybook-static', '.next', '.turbo', '.cache', 'turbo.json',
    ],
    overrides: [
        {
            files: ['src/pages/**/*.tsx'],
            rules: {
                'import/exports-last': 'off',
                'import/group-exports': 'off',
                'react/function-component-definition': 'off',
            },
        },
        {
            files: ['src/stores/*.ts', 'src/types/*.ts'],
            rules: {
                'import/exports-last': 'off',
                'import/group-exports': 'off',
            },
        },
        {
            files: ['.cz-config.cjs', 'jest.setup.ts', 'postcss.config.js'],
            rules: {
                '@typescript-eslint/no-require-imports': 'off',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            extends: ['plugin:jest/recommended'],
            files: ['test/**'],
        },
        {
            extends: ['plugin:json/recommended'],
            files: ['**/*.json'],
            plugins: ['json'],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        '@stylistic',
        'import-newlines',
        'jsdoc',
        'no-secrets',
        'perfectionist',
        'react',
        'react-hooks',
        'react-refresh',
        'simple-import-sort',
        'sonarjs',
        'tsdoc',
        '@typescript-eslint',
        'jest',
        'json',
    ],
    rules: {
        ...perfectionist.configs['recommended-alphabetical'].rules,
        '@stylistic/arrow-parens': 'off',
        '@stylistic/comma-dangle': ['error', 'always-multiline'],
        '@stylistic/eol-last': ['error', 'always'],
        '@stylistic/indent': ['error', 4],
        '@stylistic/key-spacing': ['error'],
        '@stylistic/linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
        '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        '@stylistic/max-len': ['error', { code: 256 }],
        '@stylistic/member-delimiter-style': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/no-multiple-empty-lines': 'off',
        '@stylistic/no-trailing-spaces': ['error', { ignoreComments: true, skipBlankLines: true }],
        '@stylistic/padded-blocks': ['error', 'never'],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/semi': 'error',
        '@stylistic/semi-spacing': 'error',
        '@stylistic/space-in-parens': 'off',
        '@stylistic/type-generic-spacing': 'error',
        '@stylistic/type-named-tuple-spacing': 'error',

        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/sort-type-constituents': 'off',
        'arrow-body-style': ['off'],
        'class-methods-use-this': 'off',
        'import-newlines/enforce': ['error', { items: 30, 'max-len': 240 }],
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/exports-last': 'off',
        'import/extensions': 'off',
        'import/group-exports': 'off',
        'import/namespace': ['error', { allowComputed: true }],
        'import/newline-after-import': 'error',
        'import/no-default-export': 'off',

        'import/no-duplicates': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'off',
        'jsdoc/check-alignment': 'warn',
        'jsdoc/check-indentation': 'warn',
        'jsdoc/check-syntax': 'warn',
        'jsdoc/no-blank-blocks': 'warn',
        'jsdoc/no-types': 'error',
        'jsdoc/require-asterisk-prefix': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-jsdoc': 'off',

        'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
        'jsdoc/require-returns': 'off',
        'jsdoc/require-throws': 'error',
        'jsdoc/sort-tags': 'warn',
        'newline-before-return': 'off',
        'no-alert': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

        'no-prototype-builtins': 'off',
        'no-secrets/no-secrets': 'error',
        'no-template-curly-in-string': 'error',

        'no-underscore-dangle': 'off',
        'perfectionist/sort-imports': 'off',

        'perfectionist/sort-jsx-props': 'off',
        'perfectionist/sort-union-types': ['error', {
            groups: ['conditional', 'function', 'import', 'intersection', 'keyword', 'literal', 'named', 'object', 'operator', 'tuple', 'union', 'nullish', 'unknown'],
            ignoreCase: true,
            type: 'alphabetical',
        }],
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        'react-refresh/only-export-components': 'warn',
        'react/boolean-prop-naming': ['off', { rule: '^(is|has|should)_[a-z]+(_[a-z]+)*$' }],
        'react/button-has-type': 'error',
        'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
        'react/display-name': 'off',
        'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-curly-brace-presence': 'warn',
        'react/jsx-curly-newline': 'error',
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-fragments': 'error',
        'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
        'react/jsx-max-depth': ['off', { max: 8 }],
        'react/jsx-max-props-per-line': ['error', { 'maximum': 1, 'when': 'always' }],
        'react/jsx-no-leaked-render': ['off', { validStrategies: ['ternary', ''] }],
        'react/jsx-no-script-url': 'error',
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-pascal-case': 'error',
        'react/jsx-props-no-multi-spaces': 'error',
        'react/jsx-sort-props': ['error', { callbacksLast: true, multiline: 'last', reservedFirst: true, shorthandFirst: true }],
        'react/jsx-tag-spacing': ['error'],
        'react/no-children-prop': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-typos': 'warn',
        'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
        'react/no-unused-prop-types': 'error',

        'react/prefer-stateless-function': 'error',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'require-jsdoc': 'off',
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': 'warn',
        'tsdoc/syntax': 'warn',
    },
    settings: {
        'import/resolver': {
            node: true,
            typescript: true,
        },
        react: {
            version: 'detect',
        },
    },
};
