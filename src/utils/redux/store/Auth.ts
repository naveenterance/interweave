// Store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/Auth";
import googleAuthReducer from "../reducers/AuthGoogle";

const store = configureStore({
  reducer: {
    user: userReducer,
    googleAuth: googleAuthReducer,
  },
});

export default store;
