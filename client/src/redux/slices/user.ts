import { createSlice } from "@reduxjs/toolkit";
import { Wallet } from "../../models/User";
import { getUserInfo, signOut } from "./userThunk";

export interface UserState {
  isAuthenticated: boolean;
  loading?: boolean;
  isLoading: boolean;
  error?: string;
  uid?: string;
  isVerified?: boolean;
  username?: string;
  email?: string;
  wallet?: Wallet;
}

const initialState: UserState = {
  isAuthenticated: false,
  loading: true,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setWallet: (state, action) => {
      state.wallet = action.payload
    }
  },
  extraReducers: (builder) => {
    // Get user info
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true;
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
        isLoading: false,
        isAuthenticated: true,
      };
    });

    // Sign user out
    builder.addCase(signOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(signOut.fulfilled, () => {
      return {
        isAuthenticated: false,
        isLoading: false,
      };
    });
  },
});

export const { setWallet } = userSlice.actions;
export default userSlice.reducer;
