import { render, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { MushroomsStore } from '@/stores/MushroomsStore';

import Filters from '../Filters';
import { getAsRegExp } from './__utils__/utils';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

describe('Filters Component', () => {
  test('should render Component', async () => {
    render(
      <Provider store={MushroomsStore}>
        <Filters />
      </Provider>
    )

    const rendered = screen.queryAllByText(getAsRegExp("Fetch Mushrooms"));

    expect(rendered.length).toBe(1);
  });
 });
