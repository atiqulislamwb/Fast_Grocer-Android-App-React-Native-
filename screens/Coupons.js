import {StyleSheet, SafeAreaView, Text, View, Image} from 'react-native';
import React from 'react';

import CommonHeader from '../components/CommonHeader';
const Coupons = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Coupons" />
      <View style={styles.container}>
        <View style={{width: '100%', height: 250}}>
          <Image
            source={{
              uri: 'https://i.ibb.co/njL4VMZ/Screenshot-2023-02-13-120328-removebg-preview.png',
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.text}>No Coupons Yet</Text>
          <Text style={styles.text}>
            Coupons are automatically generated when you shop for ৳500
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Coupons;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#929393',
  },
});
