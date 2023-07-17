import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(),
    city: "Amsterdam",
    start: "2023-08-01",
    end: "2023-08-03",
  },

  {
    id: nanoid(),
    city: "Kyiv",
    start: "2023-08-01",
    end: "2023-08-02",
  },
];

const trips = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.unshift(action.payload);
    },
  },
});

export const { addTrip } = trips.actions;
export const tripsReducer = trips.reducer;
