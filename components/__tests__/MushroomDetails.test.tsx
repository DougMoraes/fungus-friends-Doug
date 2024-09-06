import { render, screen } from "@testing-library/react-native";

import MushroomDetails from "../MushroomDetails";
import { mockedMushrooms } from "./__utils__/mocks";
import { getAsRegExp } from "./__utils__/utils";

describe('MushroomDetails', () => {
  test('should render Component', () => {
    const mockedMushroom = mockedMushrooms[0];
    render(<MushroomDetails mushroom={mockedMushroom}/>);

    const renderedName = screen.queryAllByText(getAsRegExp(mockedMushroom.name));
    const renderedColor = screen.queryAllByText(getAsRegExp(mockedMushroom.color));
    const renderedSpots = screen.queryAllByText(getAsRegExp(mockedMushroom.spots));

    expect(renderedName.length).toBe(1);
    expect(renderedColor.length).toBe(1);
    expect(renderedSpots.length).toBe(1);
  });
});
