import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {StateContext} from '../context/context';

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const {addItemToCart, cartItems} = useContext(StateContext);
  console.log(cartItems);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {data: item})}>
        <Image
          source={{uri: item?.imageUrl}}
          style={{
            width: '100%',
            height: 120,
          }}
          resizeMode="contain"
        />
        <View style={styles.container2}>
          <Text
            style={{
              color: '#F70000',
              fontSize: 13,
              marginRight: 6,
              fontWeight: 'bold',
            }}>
            ৳{item?.price}
          </Text>
          <Text
            style={{
              color: '#64748B',
              fontSize: 9,
              textDecorationLine: 'line-through',
            }}>
            {item?.original_price ? `৳${item?.original_price}` : ``}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 30,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 11,
              marginLeft: 2,
            }}>
            {item?.name?.length > 30
              ? `${item?.name?.slice(0, 30)}...`
              : `${item?.name}`}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          flexDirection: 'row',
          marginTop: 8,
        }}>
        <Text
          style={{
            color: '#64748B',
            fontSize: 11,
            marginLeft: 2,
          }}>
          {item?.bundle}
        </Text>
        <TouchableOpacity onPress={() => addItemToCart(item)}>
          <AntDesign name="pluscircleo" size={36} color="#6BA22C" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: 120,
    margin: 5,
    marginBottom: 20,
    padding: 1,
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    flexDirection: 'row',
  },
});
