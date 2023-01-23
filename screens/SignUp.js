import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import useAuth from '../hooks/useAuth';
import app from '../firebase/auth.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const auth = getAuth(app);
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const provider = new GoogleAuthProvider();
  const navigation = useNavigation();

  const {loading, setLoading, user, setUser} = useAuth();

  const handleSignUp = () => {
    if (!name) {
      Alert.alert('Please enter a name');
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      Alert.alert(' Please provide correct email address');
      return;
    }
    if (!password) {
      Alert.alert('Please enter password');
      return;
    }

    if (!email) {
      Alert.alert(' Please provide  email address');
      return;
    }
    if (!address) {
      Alert.alert(' Please provide  email address');
      return;
    }
    if (password?.length < 6) {
      Alert.alert(' Password should be 6 characters');
      return;
    }
    const role = 'user';

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        updateName(name);
        saveToDatabase(user);
        setLoading(false);
        ToastAndroid.show('Sign Up Successfully', ToastAndroid.SHORT);
        setName('');
        setEmail('');
        setAddress('');
        setPassword('');
        Keyboard.dismiss();
      })
      .catch(error => {
        console.log(error);

        setLoading(false);
      });
    setLoading(false);
  };

  const updateName = name => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log('display name updated');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveToDatabase = user => {
    const userInformation = {
      name: user?.name,
      email: user?.email,
      role: user?.role,
      address: user?.address,
      createdAt: new Date(),
    };
    console.log(user?.displayName);
    setLoading(true);
    fetch(`https://fgrocer.vercel.app/users/${email}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userInformation),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === true) {
          setLoading(false);
          console.log('save to database successfully');
        } else {
          console.log('data not save to database ');
        }
      });
    setLoading(false);
  };

  // const handleGoogleSignUp = () => {
  //   signInWithPopup(auth, provider)
  //     .then(result => {
  //       const user = result.user;
  //       setUser(user);
  //       saveToDatabase(user);
  //       navigation.navigate('Home');
  //       // ...
  //     })
  //     .catch(error => {
  //       console.log(error.message);
  //     });
  // };

  return (
    <SafeAreaView style={styles.container}>
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
          <AntDesign name="arrowleft" size={35} color="#000" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              marginLeft: 12,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 100,
          height: 100,
        }}>
        <Image
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
          source={require('../assets/appLogo.png')}
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={text => setName(text)}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setEmail(text)}
        value={email}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={text => setAddress(text)}
        value={address}
        placeholder="Address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text>
          {loading && <ActivityIndicator size="small" color="#0000ff" />}{' '}
        </Text>

        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            fontSize: 15,
            color: '#475569',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Already Account ? Login
        </Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <TouchableOpacity
        style={styles.socialButton}
        //  onPress={() => handleGoogleSignUp()}
      >
        <AntDesign name="google" size={35} color="#4285F4" />
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="facebook-square" size={35} color="#3D69BE" />
        <Text style={styles.socialButtonText}>Sign Up Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="twitter-square" size={35} color="#1A83FF" />
        <Text style={styles.socialButtonText}>Sign Up Twitter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderColor: 'transparent',
    backgroundColor: '#E2E8F0',
    width: '90%',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#79AB42',
    padding: 15,
    marginTop: 10,
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  divider: {
    width: '80%',
    height: 1.5,
    backgroundColor: '#CBD5E0',
    margin: 20,
  },
  socialButton: {
    backgroundColor: '#E2E8F0',
    padding: 9,
    marginTop: 10,
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
});
