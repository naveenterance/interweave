// Reducers.js
import { createSlice } from "@reduxjs/toolkit";
import {
  INITIAL_STATE_VALUE_GOOGLE_AUTH,
  GOOGLE_AUTH_SLICE_NAME,
} from "../constants/AuthGoogle";
import { login, logout } from "../actions/Auth";

const initialState = { value: INITIAL_STATE_VALUE_GOOGLE_AUTH };

const googleAuthSlice = createSlice({
  name: GOOGLE_AUTH_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login, (state: any, action) => {
        state.value = action.payload;
      })
      .addCase(logout, (state) => {
        state.value = INITIAL_STATE_VALUE_GOOGLE_AUTH;
      });
  },
});

export default googleAuthSlice.reducer;
