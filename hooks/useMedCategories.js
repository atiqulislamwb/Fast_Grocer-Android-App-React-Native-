import useSWR from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
const useMedCategories = () => {
  const {
    data: medCategories,
    error,
    isLoading: isMedCategoriesLoading,
  } = useSWR(`https://fgrocer.vercel.app/med-categories`, fetcher);

  return {medCategories, isMedCategoriesLoading};
};

export default useMedCategories;
