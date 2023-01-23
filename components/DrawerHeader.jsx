import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DrawerHeader = ({drawer}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        <AntDesign name="menu-fold" color="black" size={33} />
      </TouchableOpacity>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6BA22C',
            padding: 3,
            width: 30,
            height: 30,
            borderRadius: 20,
            marginRight: 10,
          }}>
          <Entypo name="location-pin" color="white" size={22} />
        </View>
        <View>
          <Text style={{fontSize: 16, color: '#000000', fontWeight: 'bold'}}>
            Dhaka
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 120, marginTop: 10}}>
        <Image
          source={require('../assets/appLogo.png')}
          style={{width: 115, height: 140}}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    height: 70,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'white',
    zIndex: 10000,
  },
});

export default DrawerHeader;
