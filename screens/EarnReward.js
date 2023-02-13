import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CommonHeader from '../components/CommonHeader';

const EarnReward = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CommonHeader title="Referral Program" />
    </SafeAreaView>
  );
};

export default EarnReward;

const styles = StyleSheet.create({});
