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

  static get CSS() {
    return 'cdx-tooltip';
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

    this.tag = 'SPAN';

    this.CSS = {
      input: 'tooltip-tool__input',
    };
    this.obtainTooltipsSaved();
  }

  /**
   * Obtain the tooltips saved and passed in the EditorJS instance.
   */
  obtainTooltipsSaved() {
    const timer = setInterval(() => {
      const block = document.querySelector('.ce-block__content');
      const spanTooltips = document.querySelectorAll('.cdx-tooltip');
      if (block && spanTooltips.length) {
        spanTooltips.forEach((span) => this.createTooltip(span.dataset.tooltip, span));
      }
      if (block) clearInterval(timer);
    }, 400);
  }

  /**
   * Create the Tooltips with the Tooltip API
   * @param {String} tooltipValue is the tooltip text
   * @param {HTMLElement} spanTooltip is the selected text where the tooltip is created
   */
  createTooltip(tooltipValue, spanTooltip = this.spanTooltip) {
    if (this.spanTooltip) this.spanTooltip.dataset.tooltip = tooltipValue;
    const { tooltipLocation } = this;
    this.api.tooltip.onHover(spanTooltip, tooltipValue, { placement: tooltipLocation });
  }
  /**
   * render the button in the inline toolbar
   * @returns the button element created to the inline toolbar
   */

  render() {
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

    this.spanTooltip.classList.add(Tooltip.CSS);
    this.spanTooltip.appendChild(selectedText);
    range.insertNode(this.spanTooltip);

    this.api.selection.expandToTag(this.spanTooltip);
  }

  /**
   * unwrap delete the span if the tool is disabled
   * @param {object} range is an object with info about the selected text
   */
  unwrap(range) {
    this.spanTooltip = this.api.selection.findParentTag(this.tag, Tooltip.CSS);
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
    this.tooltipInput.placeholder = 'Add a tooltip';
    this.tooltipInput.classList.add(this.api.styles.input);
    this.tooltipInput.classList.add(this.CSS.input);
    if (this.spanTooltip) {
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
      span: true,
    };
  }
}
