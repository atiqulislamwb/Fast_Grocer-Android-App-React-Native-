import {useQuery} from '@tanstack/react-query';

const useAllMed = () => {
  const {
    data: MedProducts,
    isLoading: isMedLoading,
    isError: isMedError,
    error: medError,
  } = useQuery({
    queryKey: ['med-products'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/med-products`).then(res => res.json()),
    keepPreviousData: true,
  });
  return {MedProducts, isMedLoading};
};

export default useAllMed;
