import { nanoid } from "nanoid";
import {
  amsterdam,
  kyiv,
  berlin,
  london,
  mexico,
  newyork,
  paris,
  tokyo,
} from "./image";

export const cities = [
  {
    id: nanoid(),
    city: "Amsterdam",
    path: amsterdam,
  },
  {
    iid: nanoid(),
    city: "Kyiv",
    path: kyiv,
  },
  {
    id: nanoid(),
    city: "Berlin",
    path: berlin,
  },
  {
    id: nanoid(),
    city: "London",
    path: london,
  },
  {
    id: nanoid(),
    city: "Mexico",
    path: mexico,
  },
  {
    id: nanoid(),
    city: "New-York",
    path: newyork,
  },

  {
    id: nanoid(),
    city: "Paris",
    path: paris,
  },
  {
    id: nanoid(),
    city: "Tokyo",
    path: tokyo,
  },
];
