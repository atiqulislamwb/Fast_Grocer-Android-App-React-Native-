import {useQuery} from '@tanstack/react-query';

const useOfferProduct = () => {
  const {
    data: OfferProducts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['offer-products'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/offer-products`).then(res =>
        res.json(),
      ),
  });
  return {OfferProducts, isLoading};
};

export default useOfferProduct;
