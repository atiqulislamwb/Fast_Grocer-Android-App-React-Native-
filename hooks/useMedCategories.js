import {useQuery} from '@tanstack/react-query';

const useMedCategories = () => {
  const {
    data: medCategories,
    isLoading: isMedCategoriesLoading,
    isError: isMedCategoriesError,
    error: medCategoryError,
  } = useQuery({
    queryKey: ['med-categories'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/med-categories`).then(res =>
        res.json(),
      ),
    keepPreviousData: true,
  });
  return {medCategories, isMedCategoriesLoading};
};

export default useMedCategories;
