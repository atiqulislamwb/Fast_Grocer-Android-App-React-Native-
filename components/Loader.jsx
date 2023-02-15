import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loader = () => {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: 100,
          height: 100,
          borderRadius: 20,
          backgroundColor: '#E5E7EB',
        }}>
        <ActivityIndicator size="large" color="#9CA3AF" />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
