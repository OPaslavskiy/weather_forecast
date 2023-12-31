import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherToday } from "./operation";

const initialWeatherToday = { items: [], isLoading: false, error: null };

const weatherToday = createSlice({
  name: "weatherToday",
  initialState: initialWeatherToday,

  extraReducers: {
    [fetchWeatherToday.pending](state) {
      state.isLoading = true;
    },
    [fetchWeatherToday.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchWeatherToday.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const weatherTodayReducer = weatherToday.reducer;
