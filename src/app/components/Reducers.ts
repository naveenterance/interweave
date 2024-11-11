// Reducers.js
import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE_VALUE, USER_SLICE_NAME } from "./Constants";
import { login, logout } from "./Actions";

const initialState = { value: INITIAL_STATE_VALUE };

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login, (state, action) => {
        state.value = action.payload;
      })
      .addCase(logout, (state) => {
        state.value = INITIAL_STATE_VALUE;
      });
  },
});

export default userSlice.reducer;
