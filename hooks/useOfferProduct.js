import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());

const useOfferProduct = () => {
  const {
    data: OfferProducts,
    isLoading,
    error,
  } = useSWR(`https://fgrocer.vercel.app/offer-products`, fetcher);

  return {OfferProducts, isLoading};
};

export default useOfferProduct;
