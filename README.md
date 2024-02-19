# EditorJS Tooltip Inline-tool

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
![](https://badgen.net/badge/Editor.js/v2.0/blue)
[![Coverage Status](https://coveralls.io/repos/github/kommitters/editorjs-tooltip/badge.svg)](https://coveralls.io/github/kommitters/editorjs-tooltip)
[![OpenSSF Best Practices](https://bestpractices.coreinfrastructure.org/projects/6470/badge)](https://bestpractices.coreinfrastructure.org/projects/6470)
[![OpenSSF Scorecard](https://api.securityscorecards.dev/projects/github.com/kommitters/editorjs-tooltip/badge)](https://api.securityscorecards.dev/projects/github.com/kommitters/editorjs-tooltip)

Tooltip for [Editor.js](https://editorjs.io).

![](assets/demo.gif)
## Notes

- Adds a tooltip as an inline-tool in Editor.js.
- Custom styles to the selected text.
- Custom tooltip location.
- Custom styles to the tooltips.

## Installation

### Install via NPM
Get the package

```shell
$ npm i --save-dev editorjs-tooltip
```

Include module at your application

```javascript
import Tooltip from 'editorjs-tooltip';
```

### Load from CDN

You can load a specific version of the package from [jsDelivr CDN](https://www.jsdelivr.com/package/npm/editorjs-tooltip).

Require this script on a page with Editor.js.

```html
<script src="https://cdn.jsdelivr.net/npm/editorjs-tooltip"></script>
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  tools: {
    tooltip: {
      class: Tooltip,
      config: {
        location: 'left',
        underline: true,
        placeholder: 'Enter a tooltip',
        highlightColor: '#FFEFD5',
        backgroundColor: '#154360',
        textColor: '#FDFEFE',
        holder: 'editorId',
      }
    }
  }
});
```
Select some text, click on the tooltip button in the inline-tools bar, and type the tooltip in the input, when the key enter is pressed, the tooltip will be created.

**Note:** Use the holder field to indicate the EditorJS Id passed in the div tag, by default the holder field is 'editorjs'.

## Config Params

| Field | Type | Description |
| -------- | -------- | -------- |
| `location`     | String (`top`, `bottom`, `left`, `right`) | Where to place the tooltip. Default value is `bottom`. |
| `underline`     | Boolean | Add underline text decoration to the text wrapped by the tooltip. Default is `false`. |
| `placeholder`     | String | Placeholder text for the tooltip input. Default is 'Add a tooltip'. |
| `highlightColor`     | String or Hexadecimal | Background color of the text wrapped by the tooltip. |
| `backgroundColor`     | String or Hexadecimal | Background color of the tooltip container. |
| `textColor`     | String or Hexadecimal | Text color of the tooltip. |
| `holder`     | String | ID of the HTML element that contains the EditorJS instance. Default is 'editorjs'. |

## Output data

Selected text will be wrapped in a span tag with a cdx-tooltip class and with a data-tooltip, it contains the tooltip text.

```json
{
    "type" : "text",
    "data" : {
        "text" : "It is a text to the <span class=\"cdx-tooltip\" data-tooltip =\"tooltip\" >tooltip</span> inline-tool."
    }
}
```

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
$ yarn lint .
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
