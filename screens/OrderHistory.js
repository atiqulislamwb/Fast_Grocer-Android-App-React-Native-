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
import CommonHeader from '../components/CommonHeader';
const OrderHistory = () => {
  const {data, isLoading} = useOrder();

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F5'}}>
      <CommonHeader title="Your Order History" />

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
