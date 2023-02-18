import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const fastGrocerApi = createApi({
  reducerPath: 'fastGrocerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fgrocer.vercel.app',
  }),

  endpoints: builder => ({
    getAllGroceryProducts: builder.query({query: () => `/products`}),
    getAllMedProducts: builder.query({query: () => '/med-products'}),
    getAllOfferProducts: builder.query({query: () => '/offer-products'}),
    getGroceryCategory: builder.query({query: () => '/categories'}),
    getMedCategory: builder.query({query: () => '/med-categories'}),
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
