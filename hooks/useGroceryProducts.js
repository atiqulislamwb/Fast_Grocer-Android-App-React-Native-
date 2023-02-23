import {useQuery} from '@tanstack/react-query';

const useGroceryProducts = () => {
  const {data, isLoading, isError, error, refetch} = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/products`).then(res => res.json()),
    removeAfterUnmount: true,
  });

  return {data, isLoading, isError, error, refetch};
};

export default useGroceryProducts;
