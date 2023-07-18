import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

const startDateSlice = createSlice({
  name: "date",
  initialState: initialFilter,
  reducers: {
    setDate(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setDate } = startDateSlice.actions;
export const startDateReducer = startDateSlice.reducer;
