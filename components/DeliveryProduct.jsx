import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DeliveryProduct = ({item}) => {
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 80,
          padding: 2,
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{width: 90, padding: 10}}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{uri: item?.imageUrl}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 2,
            }}>
            <Text
              style={{
                marginBottom: 5,
                fontSize: 14,
                color: '#000',
                fontWeight: 'bold',
              }}>
              {item?.name}
            </Text>
            <Text style={{fontSize: 13, color: '#6B7280', fontWeight: 'bold'}}>
              Price: ৳{item?.price}
            </Text>

            <Text style={{fontSize: 13, color: '#6B7280', fontWeight: 'bold'}}>
              Quantity: {item?.quantity} Items
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DeliveryProduct;

const styles = StyleSheet.create({});
