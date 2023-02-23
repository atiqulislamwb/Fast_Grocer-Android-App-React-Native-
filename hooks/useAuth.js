import {StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import app from '../firebase/auth.js';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';

const useAuth = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const navigation = useNavigation();

  const {data, isLoading: userFromDbLoading} = useQuery({
    queryKey: ['users', user?.email],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/users/${user?.email}`).then(res =>
        res.json(),
      ),
    keepPreviousData: true,
  });

  const handleLogout = () => {
    signOut(auth)
      .then(abc => {
        setUser({});
        navigation.navigate('TabView');
        ToastAndroid.show(
          'LogOut Successfully',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, async currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribed();
  }, [user]);
  const userFromDb = data?.data;
  return {
    user,
    setUser,
    loading,
    userFromDb,
    setLoading,
    userFromDbLoading,
    handleLogout,
  };
};

export default useAuth;
