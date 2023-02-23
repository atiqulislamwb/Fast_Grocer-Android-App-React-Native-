import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StateContext} from './../../context/context';
import useAuth from './../../hooks/useAuth';
import CommonHeader from '../../components/CommonHeader';
const Account = () => {
  const {user, handleLogout} = useAuth();
  const navigation = useNavigation();
  console.log(user);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Profile" />
      <View>
        <View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginLeft: 30,
              marginRight: 30,

              borderRadius: 20,
            }}>
            <View
              style={{
                width: 100,
                height: 100,
                marginTop: 20,
                borderRadius: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                marginBottom: 10,
              }}>
              <Image
                source={{
                  uri:
                    user?.photoURL ||
                    'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png',
                }}
                resizeMode="cover"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <Text
              style={{
                color: '#400010',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              {user?.displayName}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.devider}></View>

      {/* button */}

      <TouchableOpacity
        onPress={() => navigation.navigate('PersonalInformation')}
        style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <View>
            <Ionicons
              name="md-person-circle-outline"
              size={32}
              color="#79AB42"
            />
          </View>

          <Text style={styles.text}>Personal Information</Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ManageAddress')}
        style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <View>
            <Feather name="home" size={32} color="#79AB42" />
          </View>

          <Text style={styles.text}>Manage Address</Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <View>
            <AntDesign name="setting" size={32} color="#79AB42" />
          </View>

          <Text style={styles.text}>Settings</Text>
        </View>
        <View>
          <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </TouchableOpacity>

      {/* logout function  */}

      <TouchableOpacity
        onPress={() => handleLogout()}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 10,
        }}>
        <View style={styles.innerWrapper}>
          <View>
            <MaterialCommunityIcons name="logout" size={32} color="#79AB42" />
          </View>

          <Text style={styles.text}>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  devider: {
    width: '100%',
    height: 1,
    backgroundColor: '#D4D4D8',
    marginTop: 25,
    marginBottom: 15,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {color: 'black', marginLeft: 9, color: 'black', fontSize: 14},
});

{
  /* <TouchableOpacity
style={{
  backgroundColor: '#E2E8F0',
  marginTop: 15,
  display: 'flex',
  paddingVertical: 8,
  paddingHorizontal: 20,
  borderRadius: 5,
}}
onPress={() => handleLogout()}>
<Text
  style={{
    fontSize: 16,
    fontWeight: '700',
    color: '#79AB42',
  }}>
  Logout
</Text>
</TouchableOpacity> */
}
