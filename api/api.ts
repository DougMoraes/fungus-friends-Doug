import { Color, Mushroom,Spots } from "../types";

const mushrooms: Mushroom[] = [
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
    spots: Spots.double,
    color: Color.red,
    latlng: [52.358271, 4.881556], // Museumplein
  },
  {
    name: "nifty bhabha",
    spots: Spots.groove,
    color: Color.blue,
    latlng: [52.363821, 4.884129], // Vondelpark
  },
  {
    name: "peaceful dijkstra",
    spots: Spots.hidden,
    color: Color.green,
    latlng: [52.377956, 4.89707], // Anne Frank House
  },
  {
    name: "nostalgic bhaskara",
    spots: Spots.inset,
    color: Color.blue,
    latlng: [52.360275, 4.910827], // De Pijp
  },
  {
    name: "silly burnell",
    spots: Spots.ridge,
    color: Color.blue,
    latlng: [52.37276, 4.893604], // Jordaan
  },
  {
    name: "romantic cray",
    spots: Spots.groove,
    color: Color.green,
    latlng: [52.378446, 4.900932], // Westerpark
  },
  {
    name: "vigilant bose",
    spots: Spots.solid,
    color: Color.red,
    latlng: [52.374032, 4.911097], // Rembrandtplein
  },
  {
    name: "quirky buck",
    spots: Spots.dashed,
    color: Color.green,
    latlng: [52.357294, 4.908007], // Heineken Experience
  },
  {
    name: "stoic cartwright",
    spots: Spots.double,
    color: Color.blue,
    latlng: [52.348263, 4.941214], // Amstelpark
  },
  {
    name: "pensive clarke",
    spots: Spots.dotted,
    color: Color.yellow,
    latlng: [52.366231, 4.921248], // Oosterpark
  },
  {
    name: "strange cannon",
    spots: Spots.hidden,
    color: Color.yellow,
    latlng: [52.375219, 4.900033], // Haarlemmerstraat
  },
  {
    name: "stupefied bohr",
    spots: Spots.none,
    color: Color.red,
    latlng: [52.352477, 4.888866], // RAI Amsterdam
  },
  {
    name: "pedantic colden",
    spots: Spots.hidden,
    color: Color.blue,
    latlng: [52.37403, 4.91256], // Hermitage Amsterdam
  },
  {
    name: "priceless davinci",
    spots: Spots.dashed,
    color: Color.green,
    latlng: [52.36123, 4.903806], // Leidseplein
  },
  {
    name: "vibrant chandrasekhar",
    spots: Spots.outset,
    color: Color.red,
    latlng: [52.368567, 4.90323], // Spui
  },
  {
    name: "wizardly booth",
    spots: Spots.groove,
    color: Color.green,
    latlng: [52.381326, 4.889613], // NDSM Wharf
  },
  {
    name: "suspicious driscoll",
    spots: Spots.inset,
    color: Color.yellow,
    latlng: [52.355774, 4.92171], // Artis Zoo
  },
  {
    name: "optimistic blackburn",
    spots: Spots.ridge,
    color: Color.red,
    latlng: [52.371586, 4.90182], // Haarlemmerdijk
  },
  {
    name: "reverent curie",
    spots: Spots.groove,
    color: Color.blue,
    latlng: [52.350918, 4.91693], // Sarphatipark
  },
  {
    name: "eager feynman",
    spots: Spots.outset,
    color: Color.yellow,
    latlng: [52.34223, 4.88322], // Zuidas
  },
  {
    name: "thoughtful gauss",
    spots: Spots.dashed,
    color: Color.blue,
    latlng: [52.379189, 4.899431], // Westerstraat
  },
  {
    name: "humble turing",
    spots: Spots.double,
    color: Color.green,
    latlng: [52.372299, 4.893619], // Prinsengracht
  },
  {
    name: "gleeful maxwell",
    spots: Spots.dashed,
    color: Color.red,
    latlng: [52.360424, 4.885407], // DeLaMar Theater
  },
  {
    name: "jovial darwin",
    spots: Spots.double,
    color: Color.yellow,
    latlng: [52.3687, 4.883675], // PC Hooftstraat
  },
  {
    name: "brave einstein",
    spots: Spots.groove,
    color: Color.blue,
    latlng: [52.37392, 4.883821], // Anne Frank Monument
  },
  {
    name: "bright fermi",
    spots: Spots.inset,
    color: Color.green,
    latlng: [52.351144, 4.878024], // Olympic Stadium
  },
  {
    name: "clever galileo",
    spots: Spots.outset,
    color: Color.yellow,
    latlng: [52.355007, 4.897732], // Amstelveenseweg
  },
  {
    name: "curious pascal",
    spots: Spots.ridge,
    color: Color.red,
    latlng: [52.374862, 4.891243], // Haarlemmerplein
  },
  {
    name: "witty hamilton",
    spots: Spots.dotted,
    color: Color.green,
    latlng: [52.346312, 4.931991], // Amstelstation
  },
  {
    name: "playful leibniz",
    spots: Spots.hidden,
    color: Color.blue,
    latlng: [52.379236, 4.855781], // Sloterplas
  },
  {
    name: "serene hawking",
    spots: Spots.solid,
    color: Color.red,
    latlng: [52.349342, 4.852876], // Rembrandtpark
  },
  {
    name: "calm kepler",
    spots: Spots.double,
    color: Color.blue,
    latlng: [52.386487, 4.883416], // Eye Filmmuseum
  },
];

const getMushrooms = (): Promise<Mushroom[]> =>
  new Promise<Mushroom[]>((resolve) =>
    setTimeout(() => resolve(mushrooms), 1500)
  );

export default getMushrooms;
