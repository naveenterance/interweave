// Reducers.js
import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE_VALUE, USER_SLICE_NAME } from "../constants/Auth";
import { login, logout } from "../actions/Auth";

const initialState = { value: INITIAL_STATE_VALUE };

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login, (state: any, action) => {
        state.value = action.payload;
      })
      .addCase(logout, (state) => {
        state.value = INITIAL_STATE_VALUE;
      });
  },
});

export default userSlice.reducer;
