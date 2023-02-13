import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Categories from '../components/Categories';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useQuery} from '@tanstack/react-query';
import CommonHeader from '../components/CommonHeader';
const AllCategories = () => {
  const navigation = useNavigation();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/categories`).then(res => res.json()),
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <CommonHeader title="Categories" />

      <View>
        <ScrollView
          style={{
            marginBottom: 60,
          }}
          showsVerticalScrollIndicator={false}>
          {isLoading && <ActivityIndicator size="large" color="#6BA22C" />}
          <View
            style={{
              marginTop: 5,
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {data?.data?.slice(0, 14).map(category => (
              <Categories item={category} key={category?._id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllCategories;
