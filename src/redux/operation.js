import { createAsyncThunk } from "@reduxjs/toolkit";
// import Notiflix from 'notiflix';
import axios from "axios";

export const API_KEY = "6V5PSUEREE8VQ9XXCVRWEES22";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export const fetchCityWeatherToday = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
