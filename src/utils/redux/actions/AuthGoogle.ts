import { GOOGLE_AUTH_SLICE_NAME } from "../constants/AuthGoogle";
import { createAction } from "@reduxjs/toolkit";
export const googleLogin = createAction(`${GOOGLE_AUTH_SLICE_NAME}/login`);
