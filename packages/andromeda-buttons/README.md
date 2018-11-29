# Andromeda Buttons

[![CircleCI](https://circleci.com/gh/code-star/andromeda.svg?style=svg)](https://circleci.com/gh/code-star/andromeda)
[![version](https://img.shields.io/npm/v/andromeda-buttons.svg?style=flat-square)](http://npm.im/andromeda-buttons)
[![downloads](https://img.shields.io/npm/dm/andromeda-buttons.svg?style=flat-square)](http://npm-stat.com/charts.html?package=andromeda-buttons&from=2018-10-13)
[![MIT License](https://img.shields.io/npm/l/andromeda-buttons.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> Buttons are used for actions, like in forms, while textual hyperlinks are used for destinations, or moving from one page to another.

This repository is a module of the full [andromeda][andromeda] repository.

## Install

This repository is distributed with [npm][npm]. After [installing npm][install-npm], you can install `andromeda-buttons` with this command.

```
$ npm install --save andromeda-buttons
```

## Explorer

Check out how to use Andromeda Buttons with React 16, Webpack 4 and Babel 7 [here](https://github.com/code-star/andromeda/tree/master/packages/andromeda-buttons/explorer)

## NPM

Get the latest andromeda-buttons [here](https://www.npmjs.com/package/andromeda-buttons)

## Usage

You can import it like this.

```javascript
import { MaterialButton } from 'andromeda-buttons'
```

## Documentation

Buttons allow users to take actions, and make choices, with a single tap.

### Andromeda MaterialButtons

Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.

#### Contained Default MaterialButton
```html
      <MaterialButton
        variant="contained"
        onClick={handleOnClick}
      >
        Default
      </MaterialButton>
```

#### Contained Primary MaterialButton
```html
      <MaterialButton
        variant="contained"
        color="primary"
        onClick={handleOnClick}
      >
        Primary
      </MaterialButton>
```

#### Contained Secondary MaterialButton
```html
      <MaterialButton
        variant="contained"
        color="secondary"
        onClick={handleOnClick}
      >
        Secondary
      </MaterialButton>
```

## License

[MIT](./LICENSE) &copy; [CODE.STΛR](https://github.com/code-star)

[andromeda]: https://github.com/code-star/andromeda
[docs]: https://github.com/code-star/andromeda/tree/master/packages/andromeda-buttons
[npm]: https://www.npmjs.com/package/andromeda-buttons
[install-npm]: https://docs.npmjs.com/getting-started/installing-node
[react]: https://github.com/facebook/react
