## Adding tailwind to sapper

```
$: npm add -D tailwindcss @tailwindcss/typography
```
## Edit 'tailwind.config.js'
```
// tailwind.config.js

module.exports = {
  future: {},
  purge: {
    mode: 'all',
    content: ['./src/**/*.svelte', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: ,
};
```
## Create 'global.pcss' in 'src/assets'
```
/* global.pcss */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Install PostCSS cli and PostCSS plugins
```
$ npm add -D postcss-cli
$ npm add -D cssnano postcss-load-config postcss-preset-env
$ npm add -D svelte-preprocess
```
## Create PostCss config file in root
```
// postcss.config.js

const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const presetEnv = require('postcss-preset-env')({
  features: {
    // enable nesting
    'nesting-rules': true,
  },
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [tailwind, presetEnv, cssnano]
    : [tailwind, presetEnv];

module.exports = { plugins };
```
## Create svelte config file
```
// svelte.config.js

const autoProcess = require('svelte-preprocess');

module.exports = {
  preprocess: autoProcess({ postcss: true }),
};
```
## Add the following to rollup
```
// rollup.config.js

const { preprocess } = require('./svelte.config');

// add preprocess to Svelte plugin in client section
  svelte({
    preprocess,
    compilerOptions: {
      dev,
      hydratable: true
    }
  }),

// add preprocess to Svelte plugin in server section
  svelte({
    preprocess,
    compilerOptions: {
      dev,
      generate: 'ssr',
      hydratable: true
    },
    emitCss: true
  }),
```

## Updates package.json
```
"scripts": {
  "dev": "run-p watch:*",
  "watch:css": "postcss src/assets/global.pcss -o static/global.css -w",
  "watch:dev": "sapper dev",
  "build": "run-s build:css build:sapper",
  "build:css": "NODE_ENV=production postcss src/assets/global.pcss -o static/global.css",
  "build:sapper": "sapper build",
  "build:export": "sapper export",
  "export": "run-s build:css build:export",
  "start": "node __sapper__/build",
  "serve": "serve ___sapper__/export",
  "cy:run": "cypress run",
  "cy:open": "cypress open",
  "test": "run-p --race dev cy:run"
}
```
## and finally run
```
$:npm add -D npm-run-all
```