import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./createRootReducer";

type InitialState = {
  msg: string;
};

const initialState: InitialState = {
  msg: "world",
};

const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
  },
});

export const selectMsg = (state: RootState) => state.app.msg;

const { actions } = appReducer;

export const { setMsg: setHello } = actions;

export default appReducer.reducer;
