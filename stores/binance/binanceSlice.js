import { COLOR_PRIMARY_BUTTON } from "@/constant/button";
import { authLogout } from "@/services/auth";
import {
  getToken,
  removeToken,
} from "./../../common/ultils/auth";
import {
  ActionReducerMapBuilder,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  actionGetSession,
  actionUserLogin,
  actionResetError,
} from "./authAction";
const token = getToken();


const initialState = {
  loading: false,
  isLogin: !!token,
  downloadToken: getTokenDownload(),
  selectDoctorId: getDoctorId(),
  error: null,
  success: false, // for monitoring the registration process.
  themeSettings: {
    colorTitleSetting: initColor,
    bgColorSetting: initColor,
    themeBordercolor: initColor,
    themeAsideBgcolor: initColor,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      const auth = getToken();
      authLogout(auth?.accessToken ?? "", auth?.refreshToken ?? "");
      removeToken();
      state.isLogin = false;
      actionResetError(); // reset error state when logout
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(actionUserLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(actionUserLogin.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = true;
      })
      .addCase(actionUserLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(actionGetSession.fulfilled, (state, action) => {
        state.session = action.payload;
      })
      .addCase(actionResetError, (state) => {
        state.error = null;
      });
  },
});

export const { logout, actionSelectDoctorId } = authSlice.actions;
export const selectSection = (state) => state.auth.session;

export default authSlice.reducer;
