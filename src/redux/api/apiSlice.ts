import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['comments'], //! for data cache revalidation
  endpoints: () => ({}),
});
