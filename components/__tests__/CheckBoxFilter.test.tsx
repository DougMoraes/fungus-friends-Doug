import { render, screen, userEvent } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { MushroomsStore } from '@/stores/MushroomsStore';

import CheckBoxFilter from '../CheckBoxFilter';
import { getAsRegExp } from './__utils__/utils';

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

    render(
      <Provider store={MushroomsStore}>
        <CheckBoxFilter label={testLabel} filterName={testfilterName} value={false} onValueChange={mockOnValueChange}/>
      </Provider>
    )

    const rendered = screen.getAllByText(getAsRegExp(testLabel));

    expect(rendered.length).toBe(1);

    const renderedCheckbox = screen.getByTestId('checkbox');

    await user.press(renderedCheckbox);

    expect(mockOnValueChange).toHaveBeenCalled();
  });
 });
