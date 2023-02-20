import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Months from '../components/Months.jsx';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BalanceDetails from '../components/BalanceDetails.jsx';
import TransactionAndRefund from '../components/TransactionAndRefund.jsx';
import CommonHeader from '../components/CommonHeader.jsx';
import useOrder from './../hooks/useOrder';
import Loader from '../components/Loader.jsx';

const PaymentHistory = () => {
  const {data, isLoading, isError, error, refetch} = useOrder();
  const deliveredOrder = data?.data?.filter(
    item => item?.deliver === true && item.deliveryTime,
  );
  const totalPriceSpend = deliveredOrder?.reduce(
    (acc, item) => acc + item?.total_price,
    0,
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Your Payment History" />
      {isLoading && <Loader />}
      <View
        style={{
          backgroundColor: '#EAB308',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            margin: 18,
            height: 170,
            padding: 7,
            borderRadius: 10,
          }}>
          <View
            style={{
              padding: 5,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomColor: '#E7E5E4',
              borderBottomWidth: 1,
              marginBottom: 5,
            }}>
            <View style={{padding: 3}}>
              <Text style={{fontSize: 13, color: '#000'}}>
                Total Spend Balance:
              </Text>
              <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                ৳{totalPriceSpend}
              </Text>
            </View>
            <View style={{}}>
              <Months />
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginLeft: 5,
            }}>
            <BalanceDetails />
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginTop: 4,
          }}>
          <TransactionAndRefund order={deliveredOrder} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default PaymentHistory;
