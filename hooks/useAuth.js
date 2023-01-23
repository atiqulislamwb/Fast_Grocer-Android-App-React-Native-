import {Alert, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import app from '../firebase/auth.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

const auth = getAuth(app);
const useAuth = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const handleLogout = () => {
    signOut(auth)
      .then(abc => {
        console.log(abc);
        setUser({});
        navigation.navigate('TabView');
        ToastAndroid.show(
          'LogOut Successfully',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, currentUser => {
      setLoading(true);
      setUser(currentUser);

      setLoading(false);
    });
    return () => {
      unSubscribed();
      setLoading(false);
    };
  }, [user]);
  return {user, setUser, handleLogout, loading, setLoading};
};

export default useAuth;

const styles = StyleSheet.create({});
