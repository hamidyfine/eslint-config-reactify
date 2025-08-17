# Changelog

All notable changes to this project will be documented in this file.

## [1.1.4]

### Changed

- Updated TypeScript rules:
  - `@typescript-eslint/consistent-type-imports`: Enforces consistent type import style with inline type imports preference
  - `@typescript-eslint/no-empty-object-type`: Disabled
  - `@typescript-eslint/no-explicit-any`: Disabled
  - `@typescript-eslint/no-non-null-assertion`: Disabled
  - `@typescript-eslint/no-unnecessary-condition`: Disabled
  - `@typescript-eslint/prefer-nullish-coalescing`: Disabled
  - `@typescript-eslint/sort-type-constituents`: Disabled
- Updated import rules:
  - `import/consistent-type-specifier-style`: Disabled
  - `import/exports-last`: Disabled
  - `import/extensions`: Disabled
  - `import/group-exports`: Disabled
  - `import/namespace`: Enforced with computed allowed
  - `import/newline-after-import`: Enforced
  - `import/no-default-export`: Disabled
  - `import/no-duplicates`: Enforced
  - `import/no-extraneous-dependencies`: Disabled
  - `import/no-named-as-default`: Disabled
  - `import/no-unresolved`: Disabled
  - `import-newlines/enforce`: Enforced with 30 items, max-len 240
  - `simple-import-sort/exports`: Warn
  - `simple-import-sort/imports`: Warn
- Updated code quality rules:
  - `perfectionist/sort-exports`: Enforced with comment partitioning
  - `perfectionist/sort-imports`: Disabled
  - `perfectionist/sort-jsx-props`: Disabled
  - `perfectionist/sort-modules`: Enforced with comment partitioning
  - `perfectionist/sort-union-types`: Enforced with custom groups
- Updated test file patterns and rules:
  - Applied `jest-dom` and `jest` recommended rules to `test/**`, `**/*.test.{js,jsx,ts,tsx}`, and `**/*.spec.{js,jsx,ts,tsx}`
- Updated misc rules and file globs:
  - Enabled `eslint-plugin-json` for `*.json`
  - Relaxed React rules for `src/pages/**/*.tsx`
  - Relaxed export rules for `src/types/*.ts` & `src/stores/*.ts`
  - Relaxed CommonJS rules for `.cz-config.cjs`, `jest.setup.ts`, `postcss.config.js`

## [1.1.2]

### Fixed

- Disable duplicate TypeScript rules:
  - `typescript-eslint/no-non-null-assertion`: Changed from 'error' to 'off'
  - `typescript-eslint/no-unnecessary-condition`: Changed from 'error' to 'off'
  - `typescript-eslint/prefer-nullish-coalescing`: Changed from 'error' to 'off'

## [1.1.1]

### Added

- **New Plugin**: Added `eslint-plugin-jest-dom` for enhanced testing support
- **New Plugin**: Added `eslint-plugin-newline-destructuring` for better code formatting
- **New Rules**:
  - `@typescript-eslint/consistent-type-imports`: Enforces consistent type import style with inline type imports preference
  - `@typescript-eslint/no-explicit-any`: Disabled to allow explicit any usage
  - `newline-destructuring/newline`: Enforces newlines in destructuring assignments
  - `perfectionist/sort-exports`: Enables sorting of exports with comment partitioning
  - `perfectionist/sort-modules`: Enables sorting of modules with comment partitioning

### Changed

- **Rule Updates**:
  - `import/consistent-type-specifier-style`: Disabled (was previously set to 'prefer-top-level')
  - `react/destructuring-assignment`: Disabled (was previously enforced with 'always' setting)
  - `typescript-eslint/no-non-null-assertion`: Changed from 'off' to 'error'
  - `typescript-eslint/no-unnecessary-condition`: Changed from 'off' to 'error'
  - `typescript-eslint/prefer-nullish-coalescing`: Changed from 'off' to 'error'

### Enhanced

- Test Configuration: Extended test file patterns to include more comprehensive matching:
  - Added `**/*.test.{js,jsx,ts,tsx}` and `**/*.spec.{js,jsx,ts,tsx}` patterns.
- Improved TypeScript import handling with consistent type import enforcement
- Strengthened TypeScript strict mode with additional error-level rules for better type safety
- Ignore Patterns: Added `!.storybook` to ensure Storybook configuration files are not ignored

## [1.0.1] - Initial Release

- Initial stable release with comprehensive ESLint configuration for React projects
- Support for TypeScript, React, Jest, and various code quality plugins
- Stylistic rules and import organization
- Multiple file type configurations
