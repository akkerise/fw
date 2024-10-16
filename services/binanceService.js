import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./baseService";

export const binanceService = createApi({
  reducerPath: "binanceService",
  baseQuery: axiosBaseQuery(),
  endpoints: (builder) => ({
    // fetchJokes: builder.query({
    //   query: () => ({
    //     url: "/jokes",
    //     method: "get",
    //   }),
    //   providesTags: ["fetchJokes"], // provide unique name in which this unique key is used for invalidation
    // }),
    // updateJokes: builder.mutation({
    //   query: (formData) => ({
    //     url: "/jokes/update",
    //     method: "post",
    //     data: formData,
    //   }),
    //   invalidatesTags:["fetchJokes"], // Invalidate fetchJokes on mutation success
    // }),
    newOrder: builder.mutation({
      query: (data) => ({
        url: "/v3/order",
        method: "post",
        data,
      }),
      invalidatesTags:["fetchOrders"], // Invalidate fetchJokes on mutation success
    }),
  }),
});

export const { newOrder } = binanceService;