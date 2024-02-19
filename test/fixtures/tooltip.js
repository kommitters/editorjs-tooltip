import Tooltip from '../../src/index';

/**
 * Mock Editor.js API
 */
const api = {
  styles: {
    inlineToolButton: 'ce-inline-tool',
  },
  selection: {
    expandToTag: function expandToTag(node) {
      return node;
    },
    findParentTag: function findParentTag() {},
  },
  tooltip: {
    onHover: function onHover() {},
  },
};

/**
 * Config object with right position
 */
const config = {
  location: 'right',
  underline: true,
  placeholder: 'Enter a tooltip',
  highlightColor: 'red',
  backgroundColor: 'blue',
  textColor: 'white',
  holder: 'editorjs2',
};

/**
 * Creates an instance of Tooltip
 */
const createTooltip = (data) => new Tooltip({
  data,
  api,
});

const createCustomizedTooltip = (data) => new Tooltip({
  data,
  api,
  config,
});

export { createTooltip, createCustomizedTooltip };
