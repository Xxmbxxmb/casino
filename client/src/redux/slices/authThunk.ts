import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken } from "../../utils/auth";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", payload);
      console.log(response.data);
      api.defaults.headers = {
        ...api.defaults.headers,
        "x-access-token": response.data.token,
      } as any;

      setToken(response.data.token);
      return {
        ...response.data,
        decoded: await jwtDecode(response.data.token),
      };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) throw new Error("No token in storage");

      api.defaults.headers = {
        ...api.defaults.headers,
        "x-access-token": token,
      } as any;
      const response = await api.post("/auth/refresh");

      setToken(response.data.token);
      api.defaults.headers = {
        ...api.defaults.headers,
        "x-access-token": response.data.token,
      } as any;

      return {
        token: response.data.token,
      };
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

export const signOut = createAsyncThunk("auth/signout", async () => {
  removeToken();
});
