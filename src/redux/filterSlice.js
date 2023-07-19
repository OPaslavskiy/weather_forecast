import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
