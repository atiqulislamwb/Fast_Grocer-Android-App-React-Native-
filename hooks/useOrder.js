import useAuth from './useAuth';
import {useQuery} from '@tanstack/react-query';

const useOrder = () => {
  const {user} = useAuth();
  const {data, isLoading, isError, error, refetch} = useQuery({
    queryKey: ['order', user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/order/${user?.email}`).then(res =>
        res.json(),
      ),
    keepPreviousData: true,
  });

  return {data, isLoading, isError, error, refetch};
};

export default useOrder;
