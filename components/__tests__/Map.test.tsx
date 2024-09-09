import { screen } from "@testing-library/react-native";

import Map from "../Map";
import { mockEmptyState, mockWithMushroomsState } from "./__utils__/mocks";
import { getAsRegExp, renderWithProviders } from "./__utils__/utils";

describe('Map', () => {
  test('should render Map with no Markers when points is an empty array', () => {
    renderWithProviders(
      <Map />,
      mockEmptyState
    );

    const renderedMap = screen.queryAllByTestId('map');
    const renderedMarkers = screen.queryAllByTestId('marker');

    expect(renderedMap.length).toBe(1);
    expect(renderedMarkers.length).toBe(0);
  });
});
