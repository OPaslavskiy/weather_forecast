import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherTime } from "./operation";

const initialWeatherTime = { items: [], isLoading: false, error: null };

const weatherTime = createSlice({
  name: "weatherTime",
  initialState: initialWeatherTime,

  extraReducers: {
    [fetchWeatherTime.pending](state) {
      state.isLoading = true;
    },
    [fetchWeatherTime.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchWeatherTime.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const weatherTimeReducer = weatherTime.reducer;
