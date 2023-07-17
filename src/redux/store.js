import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { weatherTodayReducer } from "./weatherToday";
import { filterReducer } from "./filterSlice";
// import { authReducer } from "./auth/auth-slice";
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    weatherToday: weatherTodayReducer,
    // weatherTime:
    filter: filterReducer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
  //   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
