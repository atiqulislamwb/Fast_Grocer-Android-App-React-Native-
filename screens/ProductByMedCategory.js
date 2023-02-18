import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

import ProductItem from '../components/ProductItem';

import CommonHeader from '../components/CommonHeader';
import {useGetAllMedProductsQuery} from '../redux/services/fastGrocerApi';

const ProductByMedCategory = ({route}) => {
  const {data} = route.params;

  const {data: MedProducts, isLoading} = useGetAllMedProductsQuery();
  const filterProducts = MedProducts?.data?.filter(
    item => item?.category === data?.value,
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
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

export default ProductByMedCategory;

const styles = StyleSheet.create({});
