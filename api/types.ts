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
