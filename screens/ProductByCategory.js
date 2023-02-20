import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

import ProductItem from '../components/ProductItem';

import CommonHeader from '../components/CommonHeader';
import {useGetAllGroceryProductsQuery} from '../redux/services/fastGrocerApi';

const ProductByCategory = ({route}) => {
  const {data} = route.params;

  const {data: AllProducts, isLoading} = useGetAllGroceryProductsQuery();
  const filterProducts = AllProducts?.data?.filter(
    item => item?.category === data?.value,
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title={data?.name} />

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
              justifyContent: 'flex-start',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {filterProducts?.map(category => (
              <ProductItem item={category} key={category._id} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProductByCategory;

const styles = StyleSheet.create({});
