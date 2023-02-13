import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CommonHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        height: 55,
        padding: 10,
        backgroundColor: '#F8FAFC',
        borderBottomColor: '#E2E8F0',
        borderBottomWidth: 1,
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 3,
          flexDirection: 'row',
          marginLeft: 6,
        }}>
        <AntDesign name="arrowleft" size={32} color="#000" />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 12,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommonHeader;
