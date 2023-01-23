import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useAuth from '../hooks/useAuth';

const DrawerContent = () => {
  const navigation = useNavigation();
  const {user, handleLogout} = useAuth();
  console.log(user);
  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      {user && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              marginTop: 20,
              borderRadius: 25,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#79AB42',
              borderWidth: 2,
              flexDirection: 'column',
            }}>
            {user?.photoURL ? (
              <Image
                source={{
                  uri: user?.photoURL,
                }}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png',
                }}
              />
            )}
          </View>
          <Text>{user?.displayName}</Text>
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>
      )}
      {!user && (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              marginTop: 20,
              borderRadius: 25,
              backgroundColor: '#F2F4EC',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#79AB42',
              borderWidth: 2,
              flexDirection: 'column',
            }}>
            <Entypo name="user" size={28} color="#79AB42" />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: '700',
                color: '#79AB42',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          marginTop: 40,
        }}>
        {/* Egg Club */}
        <TouchableOpacity
          onPress={() => navigation.navigate('EggClub')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#F2F4EC',
          }}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="egg-easter"
                size={28}
                color="#F7C600"
              />
            </View>

            <Text style={styles.text}>Egg Club</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* All Stores */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AllStores')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="storefront"
                size={28}
                color="#E04F54"
              />
            </View>

            <Text style={styles.text}>All Stores</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* Offers */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Offers')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="brightness-percent"
                size={28}
                color="#16AFEB"
              />
            </View>

            <Text style={styles.text}>Offers</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="black"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}></View>

      {/* down divider content */}

      <View>
        {/* Daily deals */}
        <TouchableOpacity
          onPress={() => navigation.navigate('DailyDeals')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="shopping"
                size={28}
                color="#FE5761"
              />
            </View>

            <Text style={styles.text}>Daily Deals</Text>
          </View>
          <View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={28}
              color="black"
            />
          </View>
        </TouchableOpacity>

        {/* Help  */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Help')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="help-circle-outline"
                size={28}
                color="#79AB42"
              />
            </View>

            <Text style={styles.text}>Help</Text>
          </View>
        </TouchableOpacity>

        {/* Customer Support */}

        <TouchableOpacity
          onPress={() => navigation.navigate('Support')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <Feather name="phone-call" size={24} color="#79AB42" />
            </View>

            <Text style={styles.text}>Customer Support </Text>
          </View>
        </TouchableOpacity>

        {/* Live chat */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Chat')}
          style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <MaterialCommunityIcons
                name="chat-alert-outline"
                size={28}
                color="#79AB42"
              />
            </View>

            <Text style={styles.text}>Live Chat</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}>
        <Text style={{color: '#475569', marginTop: 30, fontSize: 10}}>
          All &copy; Right Reserved By Md Atiqul Islam
        </Text>
        <Text style={{color: '#475569', marginTop: 2, fontSize: 10}}>
          v1.1.1
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {color: 'black', marginLeft: 9, color: 'black', fontSize: 14},
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },

  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#79AB42',
    marginTop: 12,
    marginBottom: 12,
  },
});

export default DrawerContent;

// onPress={() => drawer.current.closeDrawer()}
