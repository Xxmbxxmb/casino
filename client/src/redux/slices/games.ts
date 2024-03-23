import { createSlice } from "@reduxjs/toolkit";
import { Wallet } from "../../models/User";
import { getCurrentGames, startBlackjack } from "./gamesThunk";
import { Players } from "../../utils/types";

export interface Mano {
  cards: {
    pinta: string;
    valor: number;
  }[];
  total: number;
}

export interface BlackJackOptions {
  bet?: number;
  wallet?: Wallet;
  gameOver?: boolean;
  isPlaying: boolean;
  newGame?: boolean;
}

export interface BlackJackState {
  player: Mano;
  dealer: Mano;
  options: BlackJackOptions;
}

export interface GameState {
  loading?: boolean;
  error?: string;
  games: {
    bj: BlackJackState;
  };
}

const initialState: GameState = {
  loading: true,
  games: {
    bj: {
      player: {
        cards: [],
        total: 0,
      },
      dealer: {
        cards: [],
        total: 0,
      },
      options: {
        isPlaying: true,
      },
    },
  },
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    setOptions: (state, action) => {
      state.games.bj.options = {
        ...state.games.bj.options,
        ...action.payload.options
      }
    },
    addCards: (state, action) => {
      if (action.payload.player === Players.PLAYER) {
        state.games.bj.player?.cards.push(...action.payload.card);
      } else {
        state.games.bj.dealer?.cards.push(...action.payload.card);
      }
    },
    setTotal: (state, action) => {
      if (action.payload.player === Players.PLAYER) {
        state.games.bj.player.total = action.payload.total;
      } else {
        let value;
        if (action.payload.total === "A") value = 11
        else if (["J", "Q", "K"].includes(action.payload.total)) value = 10
        else value = action.payload.total
        state.games.bj.dealer.total += value;
      }
    },
  },
  extraReducers: (builder) => {
    // Recover active games
    builder.addCase(getCurrentGames.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getCurrentGames.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(getCurrentGames.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.games.bj.player = { ...action.payload.player }
      state.games.bj.dealer = { ...action.payload.dealer }
      state.games.bj.options = { ...action.payload.options }
    });

    // Start new Blackjack
    builder.addCase(startBlackjack.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(startBlackjack.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(startBlackjack.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.games.bj.dealer = { ...action.payload.dealer }
      state.games.bj.player = { ...action.payload.player }
      state.games.bj.options = { ...action.payload.options }
    });
  },
});

export const { addCards, setTotal, setOptions } = gameSlice.actions;
export default gameSlice.reducer;
