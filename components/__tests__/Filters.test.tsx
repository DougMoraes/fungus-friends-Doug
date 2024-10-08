import { screen } from '@testing-library/react-native';

import Filters from '../Filters';
import { mockEmptyState, mockWithMushroomsState } from './__utils__/mocks';
import { getAsRegExp, renderWithProviders } from './__utils__/utils';

describe('Filters Component', () => {
  test('should render Component when points state is an empty array', () => {

    renderWithProviders(
      <Filters />,
      mockEmptyState
    )

    const renderedFetchButton = screen.queryAllByText(getAsRegExp("Fetch Mushrooms"));
    const renderedResetButton = screen.queryAllByText(getAsRegExp("Reset Filters"));
    const renderedColorTitle = screen.queryAllByText(getAsRegExp("Color"));
    const renderedSpotsTitle = screen.queryAllByText(getAsRegExp("Filters"));

    expect(renderedFetchButton.length).toBe(1);
    expect(renderedResetButton.length).toBe(0);
    expect(renderedColorTitle.length).toBe(0);
    expect(renderedSpotsTitle.length).toBe(0);
  });

  test('should render Component when points state is an array with mushrooms', () => {

    renderWithProviders(
      <Filters />,
      mockWithMushroomsState
    )

    const renderedFetchButton = screen.queryAllByText(getAsRegExp("Fetch Mushrooms"));
    const renderedResetButton = screen.queryAllByText(getAsRegExp("Reset Filters"));
    const renderedColorTitle = screen.queryAllByText(getAsRegExp("Color"));
    const renderedSpotsTitle = screen.queryAllByText(getAsRegExp("Filters"));

    expect(renderedFetchButton.length).toBe(1);
    expect(renderedResetButton.length).toBe(1);
    expect(renderedColorTitle.length).toBe(1);
    expect(renderedSpotsTitle.length).toBe(1);

    mockWithMushroomsState.points.forEach((mushroom) => {
      const renderedColorFilter = screen.queryAllByText(getAsRegExp(mushroom.color));
      const renderedSpotsFilter = screen.queryAllByText(getAsRegExp(mushroom.spots));

      expect(renderedColorFilter.length).toBe(1);
      expect(renderedSpotsFilter.length).toBe(1);
    });
  });
 });
