import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import ProductItem from './ProductItem';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useGetAllGroceryProductsQuery} from '../redux/services/fastGrocerApi';

const Oil = () => {
  const {data, isLoading} = useGetAllGroceryProductsQuery();
  const oil = data?.data?.filter(product => product?.status === 'oil');
  return (
    <View
      style={{
        marginTop: 10,
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 7,
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
          Oil
        </Text>
        <TouchableOpacity>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 14, color: '#6BA22C'}}> View More</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="#6BA22C"
            />
          </View>
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#E1E7EF" />}
      <FlatList
        data={oil}
        keyExtractor={item => item._id}
        renderItem={({item}) => <ProductItem item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Oil;

const styles = StyleSheet.create({});
