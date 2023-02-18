import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.help}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
          }}>
          Need Help
        </Text>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.button}>
            <Ionicons
              name="chatbox-ellipses-outline"
              color="#6BA22C"
              size={20}
            />
            <Text
              style={{
                fontSize: 13,
                color: '#6BA22C',
                marginLeft: 7,
              }}>
              Live Chat
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Feather name="phone-call" color="#6BA22C" size={20} />
            <Text
              style={{
                fontSize: 13,
                color: '#6BA22C',
                marginLeft: 7,
              }}>
              Call
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="questioncircleo" color="#6BA22C" size={20} />
            <Text
              style={{
                fontSize: 13,
                color: '#6BA22C',
                marginLeft: 7,
              }}>
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  help: {
    marginTop: 40,
    marginBottom: 30,
  },
  container: {
    padding: 10,
    backgroundColor: '#F1F5F9',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 18,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});
