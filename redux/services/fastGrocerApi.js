import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fastGrocerApi = createApi({
  reducerPath: 'fastGrocerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fgrocer.vercel.app',
  }),

  endpoints: builder => ({
    getAllGroceryProducts: builder.query({query: () => '/products'}),
    getAllMedProducts: builder.query({query: () => '/med-products'}),
    getAllOfferProducts: builder.query({query: () => '/offer-products'}),
  }),
});

export const {
  useGetAllGroceryProducts,
  useGetAllMedProducts,
  useGetAllOfferProducts,
} = fastGrocerApi;
