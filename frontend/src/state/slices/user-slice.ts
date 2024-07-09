import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string | null;
  loggedIn: boolean;
};

const initialState: UserState = {
  username: null,
  loggedIn: false,
};

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setUsername, setLoggedIn } = rootSlice.actions;

export default rootSlice.reducer;
