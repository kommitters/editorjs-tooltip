/**
 * @jest-environment jsdom
 */
import { createTooltip, createTooltipRightPosition } from './fixtures/tooltip';

describe('Tooltip', () => {
  let tooltip;
  beforeEach(() => {
    document.body.innerHTML = `<div id= "editorjs"><span id="tooltip">Tooltip text</span></div>
                              <div class= "ct tooltip-color ct--right ct--shown">
                              <div class= "ct__content tooltip-text-color">tooltip</div></div>`;
  });

  describe('validates panel components', () => {
    beforeEach(() => {
      tooltip = createTooltip();
    });

    it('validates tooltip button', () => {
      const button = tooltip.render();
      expect(button).toHaveClass('ce-inline-tool');
    });

    it('validates tooltip input', () => {
      const input = tooltip.renderActions();
      expect(input).toHaveClass('tooltip-tool__input');
      expect(input.placeholder).toBe('Add a tooltip');
    });

    it('validates tooltip creation', () => {
      const title = document.getElementById('tooltip');
      const range = document.createRange();
      range.selectNode(title);
      tooltip.surround(range);

      const tooltipElement = document.getElementsByClassName('cdx-tooltip')[0];

      expect(tooltipElement).toBeInTheDocument();
      expect(tooltipElement).toHaveTextContent('Tooltip text');
      expect(tooltip.tooltipLocation).toBe('bottom');
    });
  });

  describe('validates config parameters', () => {
    beforeEach(() => {
      document.body.innerHTML = `<div id= "editorjs2"><span id="tooltip">Tooltip text</span></div>
                                <div class= "ct tooltip-color ct--right ct--shown">
                                <div class= "ct__content tooltip-text-color">tooltip</div></div>`;
    });

    it('validates position', () => {
      tooltip = createTooltipRightPosition();
      expect(tooltip.tooltipLocation).toBe('right');
    });

    it('validates holder', () => {
      tooltip = createTooltipRightPosition();
      expect(tooltip.editorId).toBe('editorjs2');
    });

    it('validates color and underline decoration', () => {
      tooltip = createTooltipRightPosition();

      const title = document.getElementById('tooltip');
      const range = document.createRange();
      range.selectNode(title);
      tooltip.surround(range);
      tooltip.createTooltip('Test tooltip');

      const tooltipElement = document.getElementsByClassName('cdx-tooltip')[0];

      expect(tooltipElement).toBeInTheDocument();
      expect(tooltipElement.firstChild).toHaveClass('tooltip-tool__span');
      expect(tooltipElement.firstChild).toHaveClass('tooltip-tool__underline');
      expect(tooltipElement.firstChild).toHaveStyle('background: red');
    });
  });
});
