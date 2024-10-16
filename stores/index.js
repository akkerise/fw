import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jokesApiService } from "../services/jokeService";
import appReduce from "./app/appSlice";


export const store = configureStore({
  reducer: {
    app: appReduce
  },
  /**
   * The middleware setup for the store. The GDM as `getDefaultMiddleware` call
   * returns the default middleware given by Redux Toolkit. This is then
   * concatenated with the middleware for the `jokesApiService` RTK Query
   * API. This middleware is needed to handle the automatic fetching of
   * the data from the API.
   */
  middleware: (GDM) => GDM().concat(),
});

setupListeners(store.dispatch);
export const AppDispatch = store.dispatch
export const RootState = store.getState