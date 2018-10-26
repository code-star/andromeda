<p align="center">
  <img src="/code-star-ui.png" alt="Code Star UI">
</p>

# Code Star UI

> This is a [Lerna](https://lernajs.io/) repo demonstrating a UI component library scaffolding implemented using the following front-end stack.

- [React](https://reactjs.org)
- [Typescript](http://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Webpack](https://webpack.js.org/)

> There are two simple sample components in the demo being used from the Code-Star-UI bundle in `packages/code-star-ui-buttons/lib/code-star-ui-buttons.js`

- Run `npm install`, `npm run build` to build the bundle at the root folder.
- Run `npm install`, 'npms tart' to run the demo.
- Navigate to `http://localhost:7007/` in the browser.

## Available Scripts
- `build` in `packages/code-star-ui-buttons/package.json` builds the production bundle  `packages/code-star-ui-buttons/lib/code-star-ui-ui-buttons.js`
- `start` in `packages/code-star-ui-buttons/webpack-babel-es6-sample/package.json` starts the demo.

## Webpack configuration
`packages/code-star-ui-buttons/development/webpack.config.js`

## Bundle
`packages/code-star-ui-buttons/lib/code-star-ui-buttons.js`

## Sample Components

### Sample Button 1
`packages/code-star-ui-buttons/src/ButtonOne`

### Sample Button 2
`packages/code-star-ui-buttons/src/ButtonTwo`

## Webpack Babel ES6 Sample
`packages/code-star-ui-buttons/webpack-babel-es6-sample`

## TypeScript Configuration
`packages/code-star-ui-buttons/tsconfig.json`

## TSLint Configuration
`packages/code-star-ui-buttons/tslint.json`
