import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

interface AuthState {
  isLogin: boolean;
  userId: number | null;
  token: string | null;
  role: Role;
}

const initialState: AuthState = {
  isLogin: localStorage.getItem("isLogin") === "true",
  userId: localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null,
  token: localStorage.getItem("token") || null,
  role: (localStorage.getItem("role") as Role) || Role.USER,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ userId: number; token: string; role: Role }>
    ) => {
      state.isLogin = true;
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      state.role = action.payload.role;

      localStorage.setItem("isLogin", "true");
      localStorage.setItem("userId", String(action.payload.userId));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("role", action.payload.role);
    },
    logout: (state) => {
      state.isLogin = false;
      state.userId = null;
      state.token = null;
      state.role = Role.USER;

      localStorage.removeItem("isLogin");
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
