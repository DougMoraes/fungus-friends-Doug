import { MushroomsState } from "@/features/mushroomsSlice";
import { Color, Mushroom, Spots } from "@/types";

export const mockedMushrooms: Mushroom[] = [
  {
    name: "nervous bell",
    spots: Spots.dashed,
    color: Color.red,
    latlng: [52.370216, 4.895168], // Amsterdam Central
  },
  {
    name: "nice benz",
    spots: Spots.dotted,
    color: Color.blue,
    latlng: [52.366667, 4.89454], // Dam Square
  },
  {
    name: "quizzical chaplygin",
    spots: Spots.dotted,
    color: Color.red,
    latlng: [52.358271, 4.881556], // Museumplein
  },
];

export const mockEmptyState: MushroomsState = {
  points: [],
  initialMushrooms: [],
  activeFilters: [],
  statusGetMushrooms: 'loading',
};

export const mockWithMushroomsState: MushroomsState = {
  points: mockedMushrooms,
  initialMushrooms: mockedMushrooms,
  activeFilters: [],
  statusGetMushrooms: 'loading',
};
