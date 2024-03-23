import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { Actions } from "../../utils/types";

export const getCurrentGames = createAsyncThunk(
  "get/currentGames",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/blackjack/actives");
      const data = response.data;

      if (data.message) {
        return { options: { isPlaying: false } };
      }

      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const startBlackjack = createAsyncThunk(
  "start/blackjack",
  async (bet: number | string, { rejectWithValue }) => {
    try {
      if (!bet) return;
      const response = await api.post("/blackjack/action", {
        bet: Number(bet),
        currency: "osrs",
        action: "start"
      });
      const data = response.data;

      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
