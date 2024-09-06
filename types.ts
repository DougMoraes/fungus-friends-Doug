import { MushroomsStore } from "./stores/MushroomsStore";

export type AppDispatchType = typeof MushroomsStore.dispatch;
export type RootStateType = ReturnType<typeof MushroomsStore.getState>;

export type CheckboxOptionsType = {
  uniqueColors: string[],
  uniqueSpotsTypes: string[],
};

export enum Color {
  red = "red",
  green = "green",
  yellow = "yellow",
  blue = "blue",
}

export enum Spots {
  none = "none",
  hidden = "hidden",
  dotted = "dotted",
  dashed = "dashed",
  solid = "solid",
  double = "double",
  groove = "groove",
  ridge = "ridge",
  inset = "inset",
  outset = "outset",
}

export type ColorAndSpot = {
  color: Color | null;
  spot: Spots | null;
};

export interface Mushroom {
  name: string;
  spots: Spots;
  color: Color;
  latlng: [number, number];
}

export type Filter = {
  name: keyof Mushroom,
  value: string,
};

export type MushroomsStateType = {
  points: Mushroom[],
  initialMushrooms: Mushroom[],
  activeFilters: Filter[],
  statusGetMushrooms: 'ready' | 'loading' | 'failed',
}
