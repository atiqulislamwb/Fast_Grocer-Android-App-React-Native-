import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{width: '100%', height: 150, backgroundColor: '#E76060'}}>
      <View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              backgroundColor: '#7F3434',
              marginTop: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 5,
              borderRadius: 5,
            }}>
            <Entypo name="chat" size={18} color="#fff" />
            <Text style={styles.chatHeader}>Chat</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          <AntDesign name="closesquare" size={48} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="person-circle-sharp" size={40} color="#fff" />
            <Ionicons
              style={{marginLeft: -12, zIndex: 2}}
              name="person-circle-sharp"
              size={40}
              color="#fff"
            />
            <Ionicons
              style={{marginLeft: -12, zIndex: 3}}
              name="person-circle-sharp"
              size={40}
              color="#fff"
            />
            <Ionicons
              style={{marginLeft: -12, zIndex: 4}}
              name="person-circle-sharp"
              size={40}
              color="#fff"
            />
          </View>
          <Text style={{...styles.chatHeader}}>Questions? Chat with us!</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              columnGap: 5,
            }}>
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 5,
                backgroundColor: '#4ECE3D',
              }}></View>
            <Text style={{color: '#F9D5D5'}}>Support is online</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  chatHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
