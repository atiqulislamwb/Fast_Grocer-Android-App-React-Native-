import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {StateContext} from '../context/context';
import Drawer from '../components/Drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from '../components/HomeTab';
const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar animated={true} />
      <View style={{flex: 1}}>
        <Drawer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
