import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import CouponCode from '../components/CouponCode';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';
import {StateContext} from '../context/context';

const Cart = () => {
  const {cartItems, totalPrice} = useContext(StateContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
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
              Cart
            </Text>
          </TouchableOpacity>
        </View>
        {cartItems?.length > 0 && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <CouponCode />
          </View>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        {cartItems?.length === 0 ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                marginTop: 30,
                color: '#EF4444',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              No item In Your Cart
            </Text>
            <View
              style={{
                width: '100%',
                height: 150,
                marginTop: 10,
              }}>
              <Image
                source={{
                  uri: 'https://www.pngmart.com/files/19/Sad-Emoji-PNG-File.png',
                }}
                resizeMode="contain"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </View>
          </View>
        ) : (
          <View
            style={{
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              marginBottom: 100,
            }}>
            {cartItems?.map(item => (
              <CartItem key={item._id} item={item} />
            ))}
          </View>
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaceOrder')}
          style={{
            position: 'absolute',
            bottom: 2,
            left: '2%',
            right: '2%',
            height: 55,
            width: '96%',
            backgroundColor: '#8B5CF6',
            borderRadius: 15,
            padding: 4,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text>
              <Feather name="shopping-bag" size={30} color="#fff" />
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: 17,
                fontWeight: 'bold',
              }}>
              Place Order
            </Text>
          </View>
          <View>
            <View
              style={{
                backgroundColor: '#6D28D9',
                paddingVertical: 3,
                paddingHorizontal: 30,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                ৳ {totalPrice}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({});
