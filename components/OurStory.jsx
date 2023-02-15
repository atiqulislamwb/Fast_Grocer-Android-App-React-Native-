import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OurStory = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.story}>OurStory</Text>
      <Text style={styles.story1}>
        Fast Grocer is an online shop available in Dhaka, Narayanganj,
        Chattogram, Jashore, Khulna, Gazipur, Sylhet, and Rajshahi. We believe
        the time is valuable to our fellow Dhaka residents, and that they should
        not have to waste hours in traffic, brave harsh weather, and wait in
        line just to buy necessities like eggs! This is why we deliver everyday
        needs to our customers’ door-steps across urban cities.
      </Text>

      <Text
        style={{
          marginTop: 10,
          fontSize: 17,
          color: '#000',
        }}>
        Md Atiqul Islam(Founder of this App)
      </Text>
    </View>
  );
};

export default OurStory;

const styles = StyleSheet.create({
  story: {
    marginTop: 10,
    fontSize: 14,
    color: '#000',
  },
  story1: {
    marginTop: 10,
    fontSize: 13,
    color: '#475569',
  },
});
