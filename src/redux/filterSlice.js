import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    setFilter(state, action) {
      console.log(action);
      console.log(`state`, state);
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
