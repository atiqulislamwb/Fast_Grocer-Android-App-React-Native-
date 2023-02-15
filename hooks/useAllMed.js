import useSWR from 'swr';
import {useEffect} from 'react';
const fetcher = (...args) => fetch(...args).then(res => res.json());

const useAllMed = () => {
  const {
    data: MedProducts,
    error,
    isLoading: isMedLoading,
  } = useSWR(`https://fgrocer.vercel.app/med-products`, fetcher, {
    keepPreviousData: true,
  });

  return {MedProducts, isMedLoading};
};

export default useAllMed;
