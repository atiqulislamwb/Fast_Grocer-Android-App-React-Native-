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
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        }}>
        <ActivityIndicator size="large" color="#9CA3AF" />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
