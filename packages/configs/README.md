# Configs

Common configs.

## Usage

### Eslint preset

Add to package.json:

```json
{
  "eslintConfig": {
    "extends": "./node_modules/@bewitching-eggs/configs/eslint/<browser | server>"
  }
}
```

### Prettier preset

Add to package.json:

```json
{
  "prettier": "@bewitching-eggs/configs/prettier"
}
```

### Commitlint preset

Add to package.json:

```json
{
  "commitlint": {
    "extends": "@bewitching-eggs/configs/commitlint"
  }
}
```

### Husky preset

Run the command: `npx husky init`
Then copy files from directory: `packages/configs/husky/hooks`
to husky directory in your project: `.husky/`

### Lint-staged preset

Firstly, create lint-staged.config.js file.
Then, add config:

```js
module.exports = require('@bewitching-eggs/configs/lint-staged');
```

### Tsconfig preset

Firstly, create tsconfig.json file.
Then, add config:

```json
{
  "extends": "@bewitching-eggs/configs/tsconfig/<browser | server>/tsconfig.json",
  "compilerOptions": {
    "typeRoots": ["./src/typings", "./node_modules/@types"]
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.vite.json" }]
}
```

If you using the server config do not forget to specify `outDir` setting.

```json
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

Firstly, create tsconfig.vite.json file.
Then, add config:

```json
{
  "extends": "@bewitching-eggs/configs/tsconfig/browser/tsconfig.vite.json",
  "include": ["vite.config.ts", "pwa.config.ts"]
}
```
