// Store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/Auth";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
