import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getSingleProducts: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      //if we want to send multiple argument, we have to use object.
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductsQuery,
  usePostCommentMutation,
} = api;
