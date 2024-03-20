import './index.css';
import tooltipIcon from '../assets/tooltipIcon.svg';

/**
 * Tooltip for the Editor.js.
 * Add a tooltip inline in the Toolbar.
 * Requires no server-side uploader.
 *
 * @typedef {object} TooltipData
 * @description Tool's input and output data format
 * @property {string} tooltip — tooltip text
 */

export default class Tooltip {
  static get isInline() {
    return true;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    this._state = state;
    const { button } = this;
    const { inlineToolButtonActive } = this.api.styles;
    button.classList.toggle(inlineToolButtonActive, state);
  }

  /**
   * @param {object} api Editor.js api
   */
  constructor({ api, config = {} }) {
    this.api = api;
    this.button = null;
    this._state = false;
    this.spanTooltip = null;

    const { location = 'bottom' } = config;
    this.tooltipLocation = location;
    this.highlightColor = config.highlightColor;
    this.underline = config.underline ?? false;
    this.backgroundColor = config.backgroundColor;
    this.textColor = config.textColor;
    this.editorId = config.holder ?? 'editorjs';
    this.placeholder = config.placeholder ?? 'Add a tooltip';

    this.tag = 'SPAN';

    this.CSS = {
      input: 'tooltip-tool__input',
      tooltip: 'cdx-tooltip',
      span: 'tooltip-tool__span',
      underline: 'tooltip-tool__underline',
    };
    this.tooltipsObserver();
  }

  /**
   * Customize the tooltips style with data passed in the config object
   * implementing a Mutation Observer in the dynamic tooltip tag.
   */

  customTooltip() {
    const tooltipTag = document.querySelector('.ct');
    const tooltipContent = document.querySelector('.ct__content');
    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const content = tooltipContent.textContent;
          if (document.querySelector(`[data-tooltip="${content}"]`)) {
            if (this.backgroundColor) this.setTooltipColor();
            if (this.textColor) this.setTooltipTextColor();
          } else {
            tooltipTag.classList.remove('tooltip-color');
            tooltipContent.classList.remove('tooltip-text-color');
          }
        }
      });
    });

    observer.observe(tooltipContent, { childList: true });
  }

  /**
   * Search the editorjs-tooltip style sheet
   * @returns the editorjs-tooltip style sheet
   */
  tooltipSheet() {
    const sheetsList = document.styleSheets;
    const sheets = Object.values(sheetsList);
    return sheets.filter((sheet) => sheet.ownerNode.id === 'editorjs-tooltip');
  }

  /**
   * Search for the cssRules of the selector passed
   * @param {string} selector is the CSS selector required
   * @returns the cssRules from the selector
   */
  tooltipCssRule(selector) {
    const tooltipSheet = this.tooltipSheet();
    const cssRules = Object.values(tooltipSheet[0].cssRules);
    return cssRules.filter((cssRule) => cssRule.selectorText === selector);
  }

  /**
   * Set the tooltip color using the cssRules to overwrite the rules
   */
  setTooltipColor() {
    const tooltipTag = document.querySelector('.ct');
    const beforeTooltip = this.tooltipCssRule('.tooltip-color::before');
    const afterTooltip = this.tooltipCssRule('.tooltip-color::after');

    beforeTooltip[0].style.setProperty('background-color', this.backgroundColor);
    afterTooltip[0].style.setProperty('background-color', this.backgroundColor);
    tooltipTag.classList.add('tooltip-color');
  }

  /**
   * Set the tooltip text color.
   */
  setTooltipTextColor() {
    const textColor = this.tooltipCssRule('.tooltip-text-color');
    const tooltipContent = document.querySelector('.ct__content');

    textColor[0].style.setProperty('color', this.textColor);
    tooltipContent.classList.add('tooltip-text-color');
  }

  /**
   * Observe if some tooltip span is inserted and create the respective tooltip
   */
  tooltipsObserver() {
    const holder = document.getElementById(this.editorId);
    const observer = new MutationObserver((mutationList) => {
      mutationList.forEach((mutation) => {
        if (mutation.type === 'childList'
        && mutation.target.classList.contains('codex-editor__redactor')) {
          const spanTooltips = document.querySelectorAll('.cdx-tooltip');

          spanTooltips.forEach((span) => this.createTooltip(span.dataset.tooltip, span));
        }
      });
    });

    observer.observe(holder, { childList: true, subtree: true });
  }

  /**
   * Create the Tooltips with the Tooltip API
   * @param {String} tooltipValue is the tooltip text
   * @param {HTMLElement} spanTooltip is the selected text where the tooltip is created
   */
  createTooltip(tooltipValue, spanTooltip = this.spanTooltip) {
    if (this.spanTooltip) {
      this.spanTooltip.dataset.tooltip = tooltipValue;
      this.setBackgroundColor(this.spanTooltip);
      this.setUnderlineDecoration(this.spanTooltip);
    } else {
      this.setBackgroundColor(spanTooltip);
      this.setUnderlineDecoration(spanTooltip);
    }
    const { tooltipLocation } = this;
    this.api.tooltip.onHover(spanTooltip, tooltipValue, { placement: tooltipLocation });
  }

  /**
   * Set background-color and span custom class
   * @param {HTMLElement} spanTooltip is the tooltip element
   */

  setBackgroundColor(spanTooltip) {
    const tooltip = spanTooltip;
    if (tooltip.childElementCount > 0) {
      tooltip.firstChild.classList.add(this.CSS.span);
      tooltip.firstChild.style.background = this.highlightColor;
    } else {
      tooltip.classList.add(this.CSS.span);
      tooltip.style.background = this.highlightColor;
    }
  }
  /**
   * Set underline class
   * @param {HTMLElement} spanTooltip is the tooltip element
   */

  setUnderlineDecoration(spanTooltip) {
    const tooltip = spanTooltip;
    if (this.underline) {
      (tooltip.childElementCount > 0)
        ? tooltip.firstChild.classList.add(this.CSS.underline)
        : tooltip.classList.add(this.CSS.underline);
    }
  }

  /**
   * render the button in the inline toolbar
   * @returns the button element created to the inline toolbar
   */

  render() {
    if (this.backgroundColor || this.textColor) this.customTooltip();
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.innerHTML = tooltipIcon;
    const { inlineToolButton } = this.api.styles;
    this.button.classList.add(inlineToolButton);

    return this.button;
  }
  /**
   * The method is called when the button rendered in render() is clicked
   * create a span to enclose the selected text.
   * @param {object} range is an object with info about the selected text
   * @returns
   */

  surround(range) {
    if (this.state) {
      this.unwrap(range);
      return;
    }

    this.wrap(range);
  }

  /**
   * wrap creates the span element for the selected text
   * @param {object} range is an object with info about the selected text
   */

  wrap(range) {
    const selectedText = range.extractContents();
    this.spanTooltip = document.createElement(this.tag);

    this.spanTooltip.classList.add(this.CSS.tooltip);
    this.spanTooltip.appendChild(selectedText);
    range.insertNode(this.spanTooltip);

    this.api.selection.expandToTag(this.spanTooltip);
  }

  /**
   * unwrap delete the span if the tool is disabled
   * @param {object} range is an object with info about the selected text
   */
  unwrap(range) {
    this.spanTooltip = this.api.selection.findParentTag(this.tag, this.CSS.tooltip);
    const text = range.extractContents();

    this.spanTooltip.remove();

    range.insertNode(text);
  }

  /**
   * Checkstate is called when the user select any text
   * check the state of the tool in the selected text
   */
  checkState() {
    this.spanTooltip = this.api.selection.findParentTag(this.tag);
    this.state = !!this.spanTooltip;

    if (this.state) this.showActions();
    else this.hideActions();
  }

  /**
   * render actions in the Toolbar
   * @returns the input in the Toolbar to insert the tooltip
   */
  renderActions() {
    this.spanTooltip = this.api.selection.findParentTag(this.tag);
    this.tooltipInput = document.createElement('input');
    this.tooltipInput.placeholder = this.placeholder;
    this.tooltipInput.classList.add(this.api.styles.input);
    this.tooltipInput.classList.add(this.CSS.input);
    if (this.spanTooltip && this.spanTooltip.dataset.tooltip) {
      const tooltipStored = this.spanTooltip.dataset.tooltip;
      this.tooltipInput.value = tooltipStored;
    }
    this.tooltipInput.hidden = true;

    return this.tooltipInput;
  }

  /**
   * Show the input and create the tooltip when the user presses Enter
   */
  showActions() {
    this.tooltipInput.hidden = false;
    this.api.listeners.on(this.tooltipInput, 'keydown', (e) => {
      if (e.key === 'Enter') {
        const tooltipValue = this.tooltipInput.value;
        this.createTooltip(tooltipValue);
        this.closeToolbar();
      }
    }, false);
  }

  /**
   * Hide the input if the user do not have tooltip in the selected text
   */
  hideActions() {
    this.tooltipInput.hidden = true;
  }

  /**
   * close the toolbar when the user presses Enter
   */
  closeToolbar() {
    const toolbar = document.querySelector('.ce-inline-toolbar--showed');
    toolbar.classList.remove('ce-inline-toolbar--showed');
  }

  /**
   * satanize the data output
  */
  static get sanitize() {
    return {
      span: (e) => {
        e.classList.remove('tooltip-tool__span', 'tooltip-tool__underline');
        return { class: true, 'data-tooltip': true };
      },
    };
  }
}
