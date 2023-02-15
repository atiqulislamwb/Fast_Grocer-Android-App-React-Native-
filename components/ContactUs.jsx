import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';

const ContactUs = () => {
  const {user} = useAuth();
  const [name, setName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.text}>
        Feel free to contact us anytime at 01937547204
      </Text>
      <Text style={styles.text}>
        Or if you prefer, you can drop us a note using the form below. You'll
        always get a response from a real person — with a real name — within 48
        hours.{' '}
      </Text>
      <Text style={{...styles.text, fontSize: 18, marginTop: 25}}>
        Contact Us
      </Text>

      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={name => setName(name)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          value={email}
          onChangeText={email => setEmail(email)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Message"
          value={message}
          onChangeText={message => setMessage(message)}
        />

        <View style={{...styles.wrapper, marginTop: 15}}>
          <TouchableOpacity style={styles.shoppingButton}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{...styles.text, fontSize: 24, marginTop: 25}}>
          Or call us: +8801937547204
        </Text>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: '#CBD5E1',
    borderBottomWidth: 1,
    marginBottom: 12,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 18,
    flexDirection: 'row',
    padding: 2,
    columnGap: 8,
  },
  shoppingButton: {
    backgroundColor: '#FF4E56',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 6,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
});
