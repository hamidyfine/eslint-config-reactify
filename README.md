# eslint-config-reactify

A comprehensive ESLint configuration for modern **React + TypeScript** projects.
Supports both **Flat Config** (`eslint.config.js`) and **Legacy Config** (`.eslintrc.js`) with zero setup.

---

## ✨ Features

- ✅ Supports **Flat Config** (ESLint ≥ 8.21) and **Legacy Config**
- ✅ Pre-configured for **React**, **TypeScript**, **JSX**, **JSDoc**, and more
- ✅ Opinionated formatting via `@stylistic/eslint-plugin`
- ✅ Linting for test files, config files, JSON, documentation, and imports
- ✅ Includes rules from 15+ ESLint plugins

---

## 📦 Installation

```bash
npm install -D eslint eslint-config-reactify
# or
yarn add -D eslint eslint-config-reactify
````

> Only `eslint` is required as a peer dependency. All plugins are bundled.

---

## 🚀 Usage

### Flat Config (recommended)

> ESLint 8.21+ required

```js
// eslint.config.js
import config from 'eslint-config-reactify';

export default [
    ...config
    // Other configs
];
```

### Next.js (`eslint-config-next`)

ESLint 9 flat config allows each plugin ID (for example `import`, `react`, `react-hooks`, `@typescript-eslint`) to be registered only once in the merged config. `eslint-config-next` and `eslint-config-reactify` both attach those plugins, which triggers **Cannot redefine plugin …** in the VS Code ESLint extension if you spread both configs verbatim.

Spread Next’s config **first**, then map every reactify slice through a small helper that **drops only** the plugin entries Next already owns. Rules, `settings`, and other plugins (for example `@stylistic`, `perfectionist`, `json`) stay on the slice, so behavior stays the same aside from sharing Next’s plugin instances.

```bash
npm install -D eslint eslint-config-next eslint-config-reactify
```

Use the **`eslint-config-reactify/next`** entry (same usage pattern as the main export). It layers the default Next flat setup (`core-web-vitals`, `typescript`, `globalIgnores`) and then reactify with duplicate plugins stripped so ESLint 9 does not throw **Cannot redefine plugin …**.

```bash
npm install -D eslint eslint-config-next eslint-config-reactify
```

```js
// eslint.config.mjs
import config from 'eslint-config-reactify/next';

export default config;
```

See [`examples/next/eslint.config.mjs`](examples/next/eslint.config.mjs). Add your own config objects after importing if you need overrides.

### Legacy Config

```js
// .eslintrc.js
module.exports = {
  extends: ['eslint-config-reactify'],
};
```

---

## 🔧 Overriding Rules

In `eslint.config.js`:

```js
import config from 'eslint-config-reactify';

export default [
  ...config,
  {
    rules: {
      'no-console': 'warn',
    },
  },
];
```

---

## 📁 Ignored by Default

These folders and files are excluded:

```text
dist, build, coverage, node_modules, public, out, storybook-static, .next, .turbo, .cache, turbo.json
```

---

## 📚 Rules Included

### 🧠 Core Logic & Styling — `@stylistic/eslint-plugin`

- `@stylistic/semi`: require semicolons
- `@stylistic/quotes`: enforce single quotes
- `@stylistic/indent`: 4-space indentation
- `@stylistic/comma-dangle`: trailing commas for multiline
- `@stylistic/max-len`: 256 character line limit
- `@stylistic/no-extra-semi`: disallow extra semicolons
- `@stylistic/lines-between-class-members`: spacing in classes
- `@stylistic/type-named-tuple-spacing`: spacing in tuples
- and more...

### 💡 React — `eslint-plugin-react`, `react-hooks`, `react-refresh`

- `react/jsx-key`: enforce keys in lists
- `react/button-has-type`: require `type` on `<button>`
- `react/jsx-sort-props`: consistent prop order
- `react/jsx-tag-spacing`: spacing in tags
- `react/self-closing-comp`: enforce self-closing tags
- `react/function-component-definition`: enforce arrow components
- `react-refresh/only-export-components`: safe HMR boundaries
- and more...

### ⚙️ TypeScript — `@typescript-eslint/eslint-plugin`

- `@typescript-eslint/consistent-type-imports`: Enforces consistent type import style with inline type imports preference
- `@typescript-eslint/no-empty-object-type`: off
- `@typescript-eslint/no-explicit-any`: off (explicit any allowed)
- `@typescript-eslint/no-non-null-assertion`: off (relaxed)
- `@typescript-eslint/no-unnecessary-condition`: off
- `@typescript-eslint/prefer-nullish-coalescing`: off
- `@typescript-eslint/sort-type-constituents`: off (custom sorting used)
- and more...

### 📦 Import Handling — `eslint-plugin-import`, `simple-import-sort`, `import-newlines`

- `import/consistent-type-specifier-style`: off
- `import/exports-last`: off
- `import/extensions`: off
- `import/group-exports`: off
- `import/namespace`: enforce import syntax (with computed allowed)
- `import/newline-after-import`: enforce newline after import
- `import/no-default-export`: off
- `import/no-duplicates`: disallow duplicate imports
- `import/no-extraneous-dependencies`: off
- `import/no-named-as-default`: off
- `import/no-unresolved`: off
- `import-newlines/enforce`: enforce newlines in import lists (30 items, max-len 240)
- `simple-import-sort/exports`: warn
- `simple-import-sort/imports`: warn

### 📚 Documentation — `eslint-plugin-jsdoc`, `eslint-plugin-tsdoc`

- `jsdoc/require-description`: require a description
- `jsdoc/require-throws`: enforce `@throws`
- `tsdoc/syntax`: validate TSDoc syntax

### 🔬 Code Quality — `sonarjs`, `perfectionist`, `no-secrets`

- `sonarjs/...`: complexity, duplication, etc.
- `no-secrets/no-secrets`: detect secrets in code
- `perfectionist/sort-exports`: sorted exports with comment partitioning
- `perfectionist/sort-imports`: off (we use `simple-import-sort`)
- `perfectionist/sort-jsx-props`: off (covered by `react/jsx-sort-props`)
- `perfectionist/sort-modules`: sorted modules with comment partitioning
- `perfectionist/sort-union-types`: sorted union types (custom groups)

### 🧪 Test Files — `eslint-plugin-jest` & `eslint-plugin-jest-dom`

Applied to `test/**`, `**/*.test.{js,jsx,ts,tsx}`, and `**/*.spec.{js,jsx,ts,tsx}` and includes:

- `jest-dom/...`: recommended DOM testing rules
- `jest/...`: recommended Jest rules

### 🔧 Misc

- `*.json`: enabled with `eslint-plugin-json`
- `src/pages/**/*.tsx`: relaxed React rules for Next.js-style routes (i.e, Tanstack Router)
- `src/types/*.ts` & `src/stores/*.ts`: relaxed export rules
- `.cz-config.cjs`, `jest.setup.ts`, `postcss.config.js`: relaxed for CommonJS usage

---

## ✅ Example Project Setup

```bash
npm install -D eslint eslint-config-reactify
```

Create `eslint.config.js`:

```js
import config from 'eslint-config-reactify';

export default [...config];
```

Add an npm script:

```json
{
  "scripts": {
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0 --no-warn-ignored --fix"
  }
}
```

---

## 📄 License

MIT © hamidyfine
