import { createSlice } from "@reduxjs/toolkit";
import { login, signOut } from "./authThunk";
import { refreshToken } from "./authThunk";

type InitialState = {
  token: null | string;
  decoded: null | {
    id: string;
    username: string;
    email: string;
  };
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  token: null,
  decoded: null,
  loading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.decoded = null;
      state.error = action.payload as string;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.decoded = action.payload?.decoded.payload;
      state.token = action.payload?.token;
    });

    // Refresh Token
    builder.addCase(refreshToken.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.payload as string;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.token = action.payload?.token;
    });
  },
});

export default authSlice.reducer;
