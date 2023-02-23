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
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import CartItem from '../components/CartItem';

import CommonHeader from '../components/CommonHeader';
import {StateContext} from './../context/context';
import useAuth from './../hooks/useAuth';

const Cart = () => {
  const {cartItems, totalPrice} = useContext(StateContext);
  const {user} = useAuth();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <View>
        <CommonHeader title="Cart" />
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, width: '100%'}}>
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
                marginTop: 100,
                color: '#EF4444',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              No item In Your Cart
            </Text>
            <View
              style={{
                width: '100%',
                height: 200,
              }}>
              <Image
                source={{
                  uri: 'https://i.ibb.co/njL4VMZ/Screenshot-2023-02-13-120328-removebg-preview.png',
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
              marginTop: 8,
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

      {cartItems.length > 0 && user && (
        <TouchableOpacity
          onPress={() => navigation.navigate('PlaceOrder', {data: cartItems})}
          style={{
            position: 'absolute',
            bottom: 0,
            left: '5%',
            height: 52,
            width: '100%',
            backgroundColor: '#8B5CF6',
            borderTopLeftRadius: 25,
            padding: 6,
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
                paddingVertical: 5,
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

      {!user && (
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            position: 'absolute',
            bottom: 5,
            left: '5%',
            right: '5%',
            height: 40,
            width: '90%',
            backgroundColor: '#6BA22C',
            padding: 6,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
            Login
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default Cart;
const styles = StyleSheet.create({});
