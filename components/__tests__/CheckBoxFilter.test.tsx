import { screen, userEvent } from '@testing-library/react-native';

import CheckBoxFilter from '../CheckBoxFilter';
import { mockEmptyState } from './__utils__/mocks';
import { getAsRegExp, renderWithProviders } from './__utils__/utils';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('CheckBoxFilter Component', () => {
  test('should call onPress when Checkbox is pressed', async () => {
    const user = userEvent.setup({
      advanceTimers: () => jest.advanceTimersToNextTimer(),
    });
    const testLabel = 'red';
    const testfilterName = 'color';
    const mockOnValueChange = jest.fn();

    renderWithProviders(
      <CheckBoxFilter label={testLabel} filterName={testfilterName} isChecked={false} onValueChange={mockOnValueChange}/>,
      mockEmptyState
    )

    const rendered = screen.getAllByText(getAsRegExp(testLabel));

    expect(rendered.length).toBe(1);

    const renderedCheckbox = screen.getByTestId(getAsRegExp('checkbox'));

    await user.press(renderedCheckbox);

    expect(mockOnValueChange).toHaveBeenCalled();
  });
 });
