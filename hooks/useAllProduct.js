import {useQuery} from '@tanstack/react-query';

const useAllProduct = () => {
  const {data: AllProducts, isLoading} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/products`).then(res => res.json()),
    keepPreviousData: true,
  });

  return {AllProducts, isLoading};
};

export default useAllProduct;
