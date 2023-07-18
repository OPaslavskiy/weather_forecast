import { configureStore } from "@reduxjs/toolkit";
import { weatherTodayReducer } from "./weatherTodaySlice";
import { weatherTimeReducer } from "./weatherTimeSlice";

import { filterReducer } from "./filterSlice";
// import { authReducer } from "./auth/auth-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { tripsReducer } from "./tripsSlice";

import storage from "redux-persist/lib/storage";

import { combineReducers } from "@reduxjs/toolkit";
export const rootReducer = combineReducers({
  weatherToday: weatherTodayReducer,
  weatherTime: weatherTimeReducer,
  trips: tripsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
