![](https://badgen.net/badge/Editor.js/v2.0/blue)

# EditorJS Tooltip Tool

Tooltip for [Editor.js](https://editorjs.io).


## Notes

- Adds an tooltip as a block element in Editor.js.
- Keyboard shortcut.

## Installation

### Install via NPM
Get the package
```shell
$ npm i --save-dev editorjs-
```

Include module at your application

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.
```javascript
const editor = EditorJS({
  tools: {
    tooltip: {
      class: Tooltip,
      config: {
        location: 'left',
      }
    }
  }
});
```

## Config Params
| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| location          | `{location: string}` | You could choose the tooltip place(top, bottom, left, right). Default value is bottom

## Tool's tunes

1. Add a block where you can choose the text in the entire tooltip.

## Output data

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |

**Data**


## Development

**Development mode**
```shell
$ yarn build:dev
```

**Production release**
1. Create a production bundle
```shell
$ yarn build
```

2. Commit `dist/bundle.js`

**Run Linter**
The linter tool will help you by analyzing source code and fix common errors, or by following the style conventions defined.
```shell
$ yarn lint
```

**Run tests**
```shell
$ yarn test
```

## Code of conduct
We welcome everyone to contribute. Make sure you have read the [CODE_OF_CONDUCT][coc] before.

## Contributing
For information on how to contribute, please refer to our [CONTRIBUTING][contributing] guide.

## Changelog
Features and bug fixes are listed in the [CHANGELOG][changelog] file.

## License
This library is licensed under an MIT license. See [LICENSE][license] for details.

## Acknowledgements
Made with 💙 by [kommitters Open Source](https://kommit.co)

[license]: https://github.com/kommitters/editorjs-tooltip/blob/master/LICENSE
[coc]: https://github.com/kommitters/editorjs-tooltip/blob/master/CODE_OF_CONDUCT.md
[changelog]: https://github.com/kommitters/editorjs-tooltip/blob/master/CHANGELOG.md
[contributing]: https://github.com/kommitters/editorjs-tooltip/blob/master/CONTRIBUTING.md

