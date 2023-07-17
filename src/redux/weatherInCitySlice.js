import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

const weatherInCitySlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      console.log(action);
      return (state = action.payload);
    },
  },
});

export const { setFilter } = weatherInCitySlice.actions;
export const weatherInCityReducer = weatherInCitySlice.reducer;
