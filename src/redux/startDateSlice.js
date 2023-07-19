import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "2023-08-01";

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
