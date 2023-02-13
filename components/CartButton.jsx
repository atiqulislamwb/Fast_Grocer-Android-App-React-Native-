import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {StateContext} from './../context/context';
import {useContext} from 'react';
const CartButton = ({data}) => {
  const {addItemToCart} = useContext(StateContext);
  return (
    <View>
      <TouchableOpacity
        onPress={() => addItemToCart(data)}
        style={{
          width: 40,
          height: 40,
          borderRadius: 5,
          backgroundColor: '#F5FCE7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <AntDesign name="plus" size={32} color="#6BA22C" />
      </TouchableOpacity>
    </View>
  );
};

export default CartButton;

const styles = StyleSheet.create({});
