import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
  });

  return {data, isLoading, isError, error, refetch};
};

export default useOrder;

const styles = StyleSheet.create({});
