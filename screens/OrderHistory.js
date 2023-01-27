import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderItem from '../components/OrderItem';

import Loader from '../components/Loader';
import useOrder from '../hooks/useOrder';
const OrderHistory = () => {
  const {data, isLoading, isError, error, refetch} = useOrder();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F5'}}>
      <View>
        <View
          style={{
            width: '100%',
            height: 55,
            padding: 10,
            backgroundColor: '#F8FAFC',
            borderBottomColor: '#E2E8F0',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: 3,
              flexDirection: 'row',
              marginLeft: 6,
            }}>
            <AntDesign name="arrowleft" size={35} color="#000" />
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000',
                marginLeft: 12,
              }}>
              Your Order History
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {isLoading && <Loader />}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 10,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            rowGap: 15,
          }}>
          {data?.data?.map(item => (
            <OrderItem key={item?._id} item={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({});
