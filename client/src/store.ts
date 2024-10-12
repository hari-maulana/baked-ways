import { configureStore } from "@reduxjs/toolkit";
import userProfileSlice from "./features/userProfile/userProfileSlice";
import authSlice from "./features/authentication/authSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
