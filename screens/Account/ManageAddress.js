import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ManageAddress = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Manage Address" />
      <View style={{padding: 5}}>
        <View>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Ionicons name="add" size={22} color="#86B455" />
            <Text style={{color: '#86B455', fontSize: 14, fontWeight: '700'}}>
              Add New
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ManageAddress;

const styles = StyleSheet.create({});
