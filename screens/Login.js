import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

import app from '../firebase/auth.js';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

import {StateContext} from './../context/context';
import useAuth from './../hooks/useAuth';

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const {setUser} = useAuth();

  const provider = new GoogleAuthProvider();
  const handleLoginSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        setUser(user);
        setLoading(false);
        ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
        setEmail('');
        setPassword('');
        Keyboard.dismiss();
        navigation.navigate('TabView');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setLoading(true);
        const user = result.user;
        setUser(user);
        saveToDatabase(user);
        saveUserJWT(user);
        setLoading(false);
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
      });
  };

  const saveToDatabase = user => {
    const userInformation = {
      name: user?.displayName,
      email: user?.email,
    };
    fetch(`https://fgrocer.vercel.app/users/${user?.email}`, {
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
            Login
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
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLoginSubmit()}>
        <Text>
          {loading && <ActivityIndicator size="small" color="#0000ff" />}{' '}
        </Text>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text
          style={{
            fontSize: 15,
            color: '#475569',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Create An Account
        </Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <TouchableOpacity onPress={handleGoogleLogin} style={styles.socialButton}>
        <AntDesign name="google" size={35} color="#4285F4" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="facebook-square" size={35} color="#3D69BE" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="twitter-square" size={35} color="#1A83FF" />
        <Text style={styles.socialButtonText}>Continue with Twitter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    justifyContent: 'center',
    flexDirection: 'row',
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
export default Login;
