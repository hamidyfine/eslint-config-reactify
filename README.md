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

- `@typescript-eslint/no-non-null-assertion`: off (relaxed)
- `@typescript-eslint/sort-type-constituents`: off (custom sorting used)
- `@typescript-eslint/prefer-nullish-coalescing`: off
- and more...

### 📦 Import Handling — `eslint-plugin-import`, `simple-import-sort`, `import-newlines`

- `import/no-duplicates`: disallow duplicate imports
- `import/namespace`: enforce import syntax
- `import/consistent-type-specifier-style`: prefer top-level `type` imports
- `simple-import-sort/imports`: sorted imports
- `import-newlines/enforce`: enforce newlines in import lists

### 📚 Documentation — `eslint-plugin-jsdoc`, `eslint-plugin-tsdoc`

- `jsdoc/require-description`: require a description
- `jsdoc/require-throws`: enforce `@throws`
- `tsdoc/syntax`: validate TSDoc syntax

### 🔬 Code Quality — `sonarjs`, `perfectionist`, `no-secrets`

- `sonarjs/...`: complexity, duplication, etc.
- `no-secrets/no-secrets`: detect secrets in code
- `perfectionist/sort-union-types`: sorted union types
- `perfectionist/sort-imports`: disabled (we use `simple-import-sort`)
- `perfectionist/sort-jsx-props`: disabled (covered by `react/jsx-sort-props`)

### 🧪 Test Files — `eslint-plugin-jest`

Applied to `test/--` and includes:

- `jest/valid-expect`
- `jest/no-disabled-tests`
- `jest/no-identical-title`
- `jest/no-conditional-expect`

### 🔧 Misc

- `-.json`: enabled with `eslint-plugin-json`
- `src/pages/-.tsx`: relaxed React rules for Next.js-style routes (i.e, Tanstack Router)
- `src/types` & `src/stores`: relaxed export rules
- `*.config.js`, `*.setup.ts`: relaxed for CommonJS usage

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
