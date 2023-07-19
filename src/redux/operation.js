import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY_WEATHER = import.meta.env.VITE_API_KEY;

const API_KEY = API_KEY_WEATHER;

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const fetchWeatherToday = createAsyncThunk(
  "weather/cityToday",
  async (city, thunkAPI) => {
    try {
      const response = await axios.get(
        `/${city}/today?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchWeatherTime = createAsyncThunk(
  "weather/cityTime",
  async ({ city, startDate, endDate }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&cont
        entType=json`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
