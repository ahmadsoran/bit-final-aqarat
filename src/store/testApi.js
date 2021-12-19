import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "property",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://aqaratbackend.herokuapp.com",
  }),
  endpoints: (builder) => ({
    getProperty: builder.query({
      query: (name) => `property`,

    }),
  }),
});

export const {useGetPropertyQuery} = propertyApi;