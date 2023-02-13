import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fastGrocerApi = createApi({
  reducerPath: 'fastGrocerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fgrocer.vercel.app',
  }),

  endpoints: build => ({
    getAllGroceryProducts: build.query({
      query: () => `/products`,
    }),
    getAllMedProducts: build.query({query: () => '/med-products'}),
    getAllOfferProducts: build.query({query: () => '/offer-products'}),
  }),
});

export const {
  useGetAllGroceryProductsQuery,
  useGetAllMedProductsQuery,
  useGetAllOfferProductsQuery,
} = fastGrocerApi;
