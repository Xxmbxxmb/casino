import api from "../../services/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk(
  "get/userinfo",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/user/getprofile")
      const data = response.data
      const user = {
        uid: data.id,
        username: data.username,
        email: data.email,
        wallet: {
          osrs: data.wallet.osrs,
          rs3: data.wallet.rs3
        }

      }
      return user
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signOut = createAsyncThunk(
  "user/signOut",
  async (_, { rejectWithValue }) => {
    try {
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
