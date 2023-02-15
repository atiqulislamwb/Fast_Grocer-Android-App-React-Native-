import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import OrderItem from '../components/OrderItem';

import Loader from '../components/Loader';
import useOrder from '../hooks/useOrder';
import CommonHeader from '../components/CommonHeader';
const OrderHistory = () => {
  const {data, isLoading} = useOrder();
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  const onGoing = data?.data?.filter(item => item?.deliver !== true);
  const history = data?.data?.filter(item => item?.deliver === true);
  const cancel = data?.data?.filter(
    item => item?.cancel === 'Cancel Request Received',
  );

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F5'}}>
      <CommonHeader title="Your Order History" />

      <View style={styles.tabWrapper}>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab1' ? '#EF691E' : '#CBD5E1',
            borderBottomWidth: activeTab === 'tab1' ? 2 : 0,
          }}
          onPress={() => handleTabChange('tab1')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab1' ? '#EF691E' : '#64748B',
            }}>
            Ongoing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderBottomColor: activeTab === 'tab2' ? '#EF691E' : '#CBD5E1',
            borderBottomWidth: activeTab === 'tab2' ? 2 : 0,
          }}
          onPress={() => handleTabChange('tab2')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab2' ? '#EF691E' : '#64748B',
            }}>
            History
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabChange('tab3')}>
          <Text
            style={{
              ...styles.text,
              color: activeTab === 'tab3' ? '#EF691E' : '#64748B',
              borderBottomColor: activeTab === 'tab3' ? '#EF691E' : '#CBD5E1',
              borderBottomWidth: activeTab === 'tab3' ? 2 : 0,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {activeTab === 'tab1' && (
          <View
            style={{
              padding: 10,
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              rowGap: 15,
            }}>
            {onGoing?.map(item => (
              <OrderItem key={item?._id} item={item} />
            ))}
          </View>
        )}
        {activeTab === 'tab2' && (
          <View
            style={{
              padding: 10,
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              rowGap: 15,
            }}>
            {history?.map(item => (
              <OrderItem key={item?._id} item={item} />
            ))}
          </View>
        )}
        {activeTab === 'tab3' && (
          <View
            style={{
              padding: 10,
              marginTop: 10,
              display: 'flex',
              flexDirection: 'column',
              rowGap: 15,
            }}>
            {cancel.map(item => (
              <OrderItem key={item?._id} item={item} />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  tabWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    columnGap: 6,
    paddingBottom: 5,
    backgroundColor: '#F8FAFC',
    paddingTop: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 5,
  },
});
