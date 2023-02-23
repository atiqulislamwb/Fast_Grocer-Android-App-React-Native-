import {useQuery} from '@tanstack/react-query';

const useMedProducts = () => {
  const {data, isLoading, isError, error, refetch} = useQuery({
    queryKey: ['med-products'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/med-products`).then(res => res.json()),
    removeAfterUnmount: true,
  });

  return {data, isLoading, isError, error, refetch};
};

export default useMedProducts;
