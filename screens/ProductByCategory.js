import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useContext} from 'react';
import {StateContext} from '../context/context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

import ProductItem from '../components/ProductItem';
import useAllProduct from '../hooks/useAllProduct';
import CommonHeader from '../components/CommonHeader';

const ProductByCategory = ({route, navigation}) => {
  const {data} = route.params;

  const {AllProducts, isLoading} = useAllProduct();
  const filterProducts = AllProducts?.data?.filter(
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

export default ProductByCategory;

const styles = StyleSheet.create({});
