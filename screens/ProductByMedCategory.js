import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

import ProductItem from '../components/ProductItem';
import useAllMed from './../hooks/useAllMed';

const ProductByMedCategory = ({route, navigation}) => {
  const {data} = route.params;

  const {MedProducts, isMedLoading} = useAllMed();
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
          {isMedLoading && <ActivityIndicator size="large" color="#6BA22C" />}
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
