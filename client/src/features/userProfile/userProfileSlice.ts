import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfileState {
  id: number;
  userId: number;
  address: string;
  location: object;
  profilePict: string;
  user: {
    email: string;
    fullName: string;
    gender: string;
    phone: string;
    role: string;
    cart: null;
    orders: [];
  };
}

const initialState: UserProfileState = {
  id: 0,
  userId: 0,
  address: "",
  location: {},
  profilePict: "",
  user: {
    email: "",
    fullName: "",
    gender: "",
    phone: "",
    role: "",
    cart: null,
    orders: [],
  },
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (
      state,
      action: PayloadAction<Partial<UserProfileState>>
    ) => {
      state.id = action.payload.id || state.id;
      state.userId = action.payload.userId || state.userId;
      state.address = action.payload.address || state.address;
      state.location = action.payload.location || state.location;
      state.profilePict = action.payload.profilePict || state.profilePict;
      state.user = {
        email: action.payload.user?.email || state.user.email,
        fullName: action.payload.user?.fullName || state.user.fullName,
        gender: action.payload.user?.gender || state.user.gender,
        phone: action.payload.user?.phone || state.user.phone,
        role: action.payload.user?.role || state.user.role,
        cart: action.payload.user?.cart || state.user.cart,
        orders: action.payload.user?.orders || state.user.orders,
      };
    },

    clearUserProfile: (state) => {
      state.id = 0;
      state.userId = 0;
      state.address = "";
      state.location = {};
      state.profilePict = "";
      state.user = {
        email: "",
        fullName: "",
        gender: "",
        phone: "",
        role: "",
        cart: null,
        orders: [],
      };
    },
  },
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
