import useSWR from 'swr';
import {useEffect} from 'react';

const fetcher = (...args) => fetch(...args).then(res => res.json());
const useAllProduct = () => {
  const {
    data: AllProducts,
    error,
    isLoading,
  } = useSWR(`https://fgrocer.vercel.app/products`, fetcher, {
    keepPreviousData: true,
  });

  return {AllProducts, isLoading};
};

export default useAllProduct;
