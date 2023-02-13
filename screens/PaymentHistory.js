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

const PaymentHistory = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeader title="Your Payment History" />
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
                Available Balance:
              </Text>
              <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                ৳0
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
          <TransactionAndRefund />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default PaymentHistory;
