// Actions.js
import { createAction } from "@reduxjs/toolkit";
import { USER_SLICE_NAME } from "./Constants";

export const login = createAction(`${USER_SLICE_NAME}/login`);
export const logout = createAction(`${USER_SLICE_NAME}/logout`);
