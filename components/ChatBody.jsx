import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ChatBody = () => {
  return (
    <View style={{marginTop: 10, padding: 5}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 5,
        }}>
        <View style={{padding: 5}}>
          <Image
            style={{width: 50, height: 50, borderRadius: 25}}
            source={{
              uri: 'https://i.ibb.co/5sgDsBw/Screenshot-2023-02-16-132758.png',
            }}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={{color: '#94A3B8', fontSize: 15, marginTop: 5}}>
            Fast Grocer
          </Text>
          <Text
            style={{
              backgroundColor: '#E76060',
              paddingVertical: 8,
              paddingHorizontal: 10,
              marginTop: 10,
              fontSize: 15,
              color: '#fff',
              borderRadius: 8,
            }}>
            How can we help with Fast Grocer?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatBody;

const styles = StyleSheet.create({});
