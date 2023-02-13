import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
const useAllProduct = () => {
  const {
    data: AllProducts,
    error,
    isLoading,
  } = useSWR(`https://fgrocer.vercel.app/products`, fetcher);

  return {AllProducts, isLoading};
};

export default useAllProduct;
