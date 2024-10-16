import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import {
  login,
  getSession,
} from "../../services/authService";
import { removeToken, setToken } from "@/utils/auth";
import { AxiosError, HttpStatusCode } from "axios";

export const actionUserLogin = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { data } = await login({ username, password });
      setToken(data);
      return data;
    } catch (e) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const actionGetSession = createAsyncThunk(
  "auth/getSession",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getSession();
      return res.data;
    } catch (e) {
      const error = e;
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const actionResetError = createAction("auth/resetError");
