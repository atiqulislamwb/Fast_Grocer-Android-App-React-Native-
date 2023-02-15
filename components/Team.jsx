import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Team = () => {
  return (
    <View style={styles.container}>
      <View style={{width: 200, height: 200}}>
        <Image
          source={{uri: 'https://i.ibb.co/48hYjTM/profile.jpg'}}
          style={{width: '100%', height: '100%', borderRadius: 150}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          color: '#000',
          marginTop: 10,
          fontSize: 18,
        }}>
        Md Atiqul Islam
      </Text>
      <Text
        style={{
          color: '#475569',

          fontSize: 15,
        }}>
        Founder Of this App
      </Text>
    </View>
  );
};

export default Team;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
