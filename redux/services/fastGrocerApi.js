import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fastGrocerApi = createApi({
  reducerPath: 'fastGrocerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fgrocer.vercel.app',
  }),
  refetchOnMountOrArgChange: 300,

  endpoints: builder => ({
    getAllGroceryProducts: builder.query({
      query: () => `/products`,
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getAllMedProducts: builder.query({
      query: () => '/med-products',
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getAllOfferProducts: builder.query({
      query: () => '/offer-products',
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getGroceryCategory: builder.query({
      query: () => '/categories',
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getMedCategory: builder.query({
      query: () => '/med-categories',
      keepUnusedDataFor: 5 * 60 * 1000,
    }),
    getGrocerySearchResults: builder.query({
      query: searchText => `/grocery-search?q=${searchText}`,
    }),
    getMedSearchResults: builder.query({
      query: searchText => `/med-search?q=${searchText}`,
    }),
  }),
});

export const {
  useGetAllGroceryProductsQuery,
  useGetAllMedProductsQuery,
  useGetAllOfferProductsQuery,
  useGetGroceryCategoryQuery,
  useGetMedCategoryQuery,
  useGetMedSearchResultsQuery,
  useGetGrocerySearchResultsQuery,
} = fastGrocerApi;
