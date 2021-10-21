/**
 * @jest-environment jsdom
 */
import { createTooltip, createTooltipRightPosition } from './fixtures/tooltip';

describe('Tooltip', () => {
  let tooltip;

  describe('validates panel components', () => {
    beforeEach(() => {
      document.body.innerHTML = '<h3 id="tooltip">Tooltip text</h3>';
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

  describe('validates tooltip position', () => {
    it('validates position', () => {
      tooltip = createTooltipRightPosition();
      expect(tooltip.tooltipLocation).toBe('right');
    });
  });
});
