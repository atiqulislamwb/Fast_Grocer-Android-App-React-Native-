import {View, SafeAreaView, ScrollView, ActivityIndicator} from 'react-native';
import React from 'react';

import Categories from '../components/Categories';

import CommonHeader from '../components/CommonHeader';
import {useGetGroceryCategoryQuery} from '../redux/services/fastGrocerApi';
const AllCategories = () => {
  const {data, isLoading} = useGetGroceryCategoryQuery();

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
