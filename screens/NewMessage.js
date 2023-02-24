import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import ChatHeader from '../components/ChatHeader';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCollection} from 'react-firebase-hooks/firestore';
import {db, auth} from '../firebase/auth';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import useAuth from '../hooks/useAuth';

const ChatMessage = ({message}) => {
  const {user} = useAuth();
  console.log(message);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        columnGap: 5,
        marginTop: 5,
      }}>
      <View style={{padding: 5}}>
        <Image
          style={{width: 40, height: 40, borderRadius: 25}}
          source={{
            uri:
              user?.photoURL ||
              'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text
          style={{
            color: '#94A3B8',
            marginTop: 5,
            fontSize: 15,
            textAlign: 'right',
          }}>
          {message.name || 'Anonymous'}
        </Text>
        <View>
          <Text
            style={{
              backgroundColor: '#E76060',
              paddingVertical: 8,
              paddingHorizontal: 10,

              fontSize: 15,
              color: '#fff',
              borderRadius: 8,
            }}>
            {message.text}
          </Text>
        </View>
      </View>
    </View>
  );
};

const ChatBody = ({messages}) => {
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
            style={{width: 40, height: 40, borderRadius: 25}}
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

      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          rowGap: 5,
          columnGap: 5,
        }}>
        {messages &&
          messages?.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </View>
    </View>
  );
};

const NewMessage = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async text => {
    const {uid, displayName} = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: text,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setText('');
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      let messages = [];
      querySnapshot.forEach(doc => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <ChatHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatBody messages={messages} />
      </ScrollView>

      <View style={styles.input}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 4,
          }}>
          <TextInput
            style={styles.textInput}
            placeholder="Compose your message..."
            value={text}
            onChangeText={text => setText(text)}
            multiline={true}
          />
          {text !== '' && (
            <TouchableOpacity
              onPress={() => sendMessage(text)}
              style={{
                backgroundColor: '#E76060',
                padding: 7,
                borderRadius: 10,
              }}>
              <MaterialCommunityIcons name="send" color="#fff" size={23} />
            </TouchableOpacity>
          )}
        </View>
        <View>
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
      </View>
    </SafeAreaView>
  );
};

export default NewMessage;
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
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  sender: {},
  receiver: {},
});
