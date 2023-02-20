import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  IntentAndroid,
  Platform,
  Linking,
} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import useAuth from '../hooks/useAuth';
// import {DrawerContentScrollView} from '@react-navigation/drawer';

const DrawerContent = ({toggleDrawer}) => {
  const navigation = useNavigation();
  const {user} = useAuth();

  return (
    <SafeAreaView style={{flex: 1, height: '100%'}}>
      {user && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Account')}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F4F4F5',
            marginLeft: 30,
            marginRight: 30,
            marginTop: 20,
            borderRadius: 20,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              marginTop: 20,
              borderRadius: 30,

              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#79AB42',
              borderWidth: 2,
              flexDirection: 'column',
              marginBottom: 10,
            }}>
            <Image
              source={{
                uri:
                  user?.photoUrl ||
                  'https://i.ibb.co/PC1s2Wx/png-clipart-man-wearing-blue-shirt-illustration-computer-icons-avatar-user-login-avatar-blue-child.png',
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
        </TouchableOpacity>
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
          backgroundColor: '#fff',
          marginTop: 40,
          borderWidth: 1,
          borderColor: '#D4D4D8',
          marginBottom: 10,
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
          <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Coupons')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <MaterialIcons name="local-offer" size={28} color="#F4BC1C" />
              </View>

              <Text style={styles.text}>Coupons</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}
        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Favorites')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <AntDesign name="heart" size={26} color="#AA0601" />
              </View>

              <Text style={styles.text}>Favorites</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}

        <View style={styles.divider}></View>

        {/* down divider content */}

        {/* order history */}
        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderHistory')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <Entypo name="stopwatch" size={28} color="#4F93FF" />
              </View>

              <Text style={styles.text}>Order History</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}

        {/* payment history */}

        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentHistory')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <FontAwesome name="money" size={27} color="#058C40" />
              </View>

              <Text style={styles.text}>Payment History</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}

        {/* Reward */}
        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('EarnReward')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <MaterialIcons name="stars" size={28} color="#E85B15" />
              </View>

              <Text style={styles.text}>Earn a Reward</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}

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

        {/* complaint file */}

        {user && (
          <TouchableOpacity
            onPress={() => navigation.navigate('FileComplaint')}
            style={styles.wrapper}>
            <View style={styles.innerWrapper}>
              <View>
                <Entypo name="chat" size={28} color="#FF6666" />
              </View>

              <Text style={styles.text}>File a Complaint</Text>
            </View>
            <View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}

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
          onPress={() => Linking.openURL('tel:+8801937547204')}
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
      </ScrollView>
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
