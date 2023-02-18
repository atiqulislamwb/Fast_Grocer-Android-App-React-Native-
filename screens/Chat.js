import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBody from '../components/ChatBody';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Chat = () => {
  const [message, setMessage] = useState('');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ChatHeader />
      <ChatBody />
      <View style={styles.input}>
        <TextInput
          style={styles.textInput}
          placeholder="Compose your message..."
          value={message}
          onChangeText={message => setMessage(message)}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',

            alignItems: 'center',
            columnGap: 5,
            marginLeft: 15,
          }}>
          <Fontisto name="slightly-smile" size={24} color="#94A3B8" />
          <Ionicons name="attach" size={28} color="#94A3B8" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
const styles = StyleSheet.create({
  input: {
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: 0,
  },
  textInput: {
    width: '97%',
    borderTopWidth: 1,
    borderColor: '#F1F5F9',
    marginTop: 7,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    color: '#D6DFE7',
    fontWeight: '600',
  },
});
