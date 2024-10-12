import { configureStore } from "@reduxjs/toolkit";
import userProfileSlice from "./features/userProfile/userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
