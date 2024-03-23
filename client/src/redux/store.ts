import { configureStore } from "@reduxjs/toolkit";
import userSelector from "./slices/user";
import gameSelector from "./slices/games";
import authSelector from "./slices/auth";

export const store = configureStore({
  reducer: {
    user: userSelector,
    games: gameSelector,
    auth: authSelector,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
