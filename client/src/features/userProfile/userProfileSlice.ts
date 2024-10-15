import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserProfileState {
  id: number;
  email: string;
  //password: string;
  fullName: string;
  phone: string;
  gender: string;
  role: string;
  //createdAt: string;
  //updatedAt: string;
  profile: {
    id: number;
    userId: number;
    address: string;
    location: object;
    profilePict: string;
  };
  bakery: {
    id: number;
    name: string;
    description: string;
    address: string;
    location: object;
    adminId: number;
    //createdAt: string;
    //updatedAt: string;
  };
}

const initialState: UserProfileState = {
  id: 0,
  email: "",
  //password: "",
  fullName: "",
  phone: "",
  gender: "",
  role: "",
  //createdAt: "",
  //updatedAt: "",
  profile: {
    id: 0,
    userId: 0,
    address: "",
    location: {},
    profilePict: "",
  },
  bakery: {
    id: 0,
    adminId: 0,
    name: "",
    description: "",
    address: "",
    location: {},
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
      state.email = action.payload.email || state.email;
      state.fullName = action.payload.fullName || state.fullName;
      state.phone = action.payload.phone || state.phone;
      state.gender = action.payload.gender || state.gender;
      state.role = action.payload.role || state.role;
      state.profile = action.payload.profile || state.profile;
      state.bakery = action.payload.bakery || state.bakery;
    },

    clearUserProfile: (state) => {
      state.id = 0;
      state.email = "";
      state.fullName = "";
      state.phone = "";
      state.gender = "";
      state.role = "";
      state.profile = {
        id: 0,
        userId: 0,
        address: "",
        location: {},
        profilePict: "",
      };
      state.bakery = {
        id: 0,
        adminId: 0,
        name: "",
        description: "",
        address: "",
        location: {},
      };
    },
  },
});

export const { setUserProfile, clearUserProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
