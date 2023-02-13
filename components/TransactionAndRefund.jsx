import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

export const Transactions = () => {
  return (
    <View style={{marginTop: 10, padding: 3}}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#E5E7EB',
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.text}>Description</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '50%',
          }}>
          <Text style={styles.text}>Debit</Text>
          <Text style={styles.text}>Credit</Text>
          <Text style={styles.text}>Balance</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>No Transactions</Text>
      </View>
    </View>
  );
};

export const Refunds = () => {
  return (
    <View style={{marginTop: 10, padding: 3}}>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#E5E7EB',
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.text}>Description</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '40%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 3,
            }}>
            <Text style={styles.text}>Status</Text>
            <Feather name="info" size={15} />
          </View>
          <Text style={styles.text}>Amount</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>No Refund</Text>
      </View>
    </View>
  );
};

const TransactionAndRefund = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  return (
    <View style={{flex: 1, marginTop: 10}}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderBottomColor: '#9CA3AF',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          style={{
            width: '50%',
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: activeTab === 'tab1' ? '#79AB42' : '#fff',
            color: activeTab === 'tab1' ? '#79AB42' : '#000',
            borderBottomWidth: 4,
          }}
          onPress={() => handleTabChange('tab1')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: activeTab === 'tab1' ? '#79AB42' : '#000',
            }}>
            Transactions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '50%',
            height: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: activeTab === 'tab2' ? '#79AB42' : '#fff',
            borderBottomWidth: 4,
            color: activeTab === 'tab2' ? '#79AB42' : '#000',
          }}
          onPress={() => handleTabChange('tab2')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: activeTab === 'tab2' ? '#79AB42' : '#000',
            }}>
            Refunds
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {activeTab === 'tab1' && (
          <View>
            <Transactions />
          </View>
        )}
        {activeTab === 'tab2' && (
          <View>
            <Refunds />
          </View>
        )}
      </View>
    </View>
  );
};

export default TransactionAndRefund;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#4B5563',
  },
});
