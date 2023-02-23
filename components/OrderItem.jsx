import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
const OrderItem = ({item}) => {
  const orderDate = moment(item?.createdAt).format('LLL');
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('OrderDetails', {data: item})}
      style={{
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
        }}>
        {item?.order_products?.map(data => (
          <View
            key={data._id}
            style={{
              display: 'flex',
              alignItems: 'center',

              flexDirection: 'row',
              width: '100%',
              height: 90,
            }}>
            <View style={{width: 80, padding: 10}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: data.imageUrl}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: 'bold',
                  padding: 1,
                  width: data?.name?.length > 50 ? '50%' : null,
                  height: data?.name?.length > 50 ? 64 : null,
                }}>
                {data?.name}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#475569',
                  fontWeight: 'bold',
                }}>
                Quantity : {data?.quantity}
              </Text>
            </View>
          </View>
        ))}
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: 15,
            padding: 4,
          }}>
          <View>
            <Text style={{fontSize: 14, color: '#6B7280', fontWeight: 'bold'}}>
              SubTotal : {item?.totalQuantity} Items
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 13, color: '#3E2C65', fontWeight: 'bold'}}>
              {orderDate}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
