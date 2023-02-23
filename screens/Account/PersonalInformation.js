import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import useAuth from '../../hooks/useAuth';
import CommonHeader from '../../components/CommonHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';

const genders = ['Male', 'Female', 'Others'];

const PersonalInformation = () => {
  const {user, userFromDb} = useAuth();
  const [name, setName] = useState(user?.displayName);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState('Male');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Personal Information" />
      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginBottom: 10,
        }}>
        <View
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            borderRadius: 30,
            marginBottom: 10,
          }}>
          <Image
            source={{
              uri:
                user?.photoUrl ||
                'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
            }}
            resizeMode="cover"
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.iconPosition}>
            <FontAwesome name="edit" size={30} color="#86B455" />
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          value={name}
          onChangeText={name => setName(name)}
        />
        <View
          style={{
            width: '90%',
            borderColor: '#CBD5E1',
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 15,
            padding: 5,
          }}>
          <Picker
            selectedValue={gender}
            style={{
              height: 40,
            }}
            onValueChange={itemValue => setGender(itemValue)}>
            {genders.map(gender => (
              <Picker.Item
                key={gender}
                style={{}}
                label={gender}
                value={gender}
              />
            ))}
          </Picker>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Phone"
          type="number"
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          value={email}
          type="email"
          onChangeText={email => setName(email)}
        />
        <TouchableOpacity style={styles.vrifyButton}>
          <Text
            style={{
              color: '#fff',
              fontSize: 13,
              fontWeight: '500',
            }}>
            Verify email
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900'}}>
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  iconPosition: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  textInput: {
    width: '90%',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,
    color: '#000',
  },
  vrifyButton: {
    backgroundColor: '#64748B',
    width: 89,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  saveButton: {
    backgroundColor: '#86B455',
    width: '90%',
    paddingVertical: 14,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
  },
});
