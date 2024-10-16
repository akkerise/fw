import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = {
  headerHeight: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppLocale: (state, action) => {
      state.locale = action.payload;
    },
    setHeaderHeight: (state, action) => {
      state.headerHeight = action.payload;
    },
  },
});

export const { setAppLocale, setHeaderHeight } = appSlice.actions;
export const selectHeaderHeight = (state) => state.app.headerHeight;
export const selectedLocal = (state) => state.app.locale;
export default appSlice.reducer;
