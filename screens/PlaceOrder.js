import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ToastAndroid,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useContext, useState} from 'react';
import {StateContext} from './../context/context';

import AntDesign from 'react-native-vector-icons/AntDesign';

import LinearGradient from 'react-native-linear-gradient';
import useAuth from '../hooks/useAuth';
import CommonHeader from '../components/CommonHeader';
import PlaceOrderItem from '../components/PlaceOrderItem';

const PlaceOrder = ({route, navigation}) => {
  const {data} = route.params;
  const {totalPrice, totalQuantity} = useContext(StateContext);
  const [isChecked, setIsChecked] = useState(false);

  const [contact, setContact] = useState({
    name: user?.displayName,
    email: user?.email,
    phone: '',
    address: '',
    flat: '',
    apartment: '',
  });
  const {user} = useAuth();

  const payData = {
    name: contact?.name,
    email: contact?.email,
    number: contact?.phone,
    address: contact?.address,
    flat: contact?.flat,
    apartment: contact?.apartment,
    order_products: data,
    totalQuantity: totalQuantity,
    status: 'pending',
    condition: 'Card Payment',
    shipping_fee: 29,
    total_price: Number(totalPrice + 29),
    cancel: '',
  };

  const handleCashOnDeliveryOrder = async () => {
    if (
      !contact?.name ||
      !contact?.email ||
      !contact?.phone ||
      !contact?.address ||
      !contact?.flat ||
      !contact?.apartment ||
      !data.length
    ) {
      Alert.alert('Fill Up all Information');
      return;
    }
    const cashOnDeliveryData = {
      name: contact?.name,
      email: contact?.email,
      number: contact?.phone,
      address: contact?.address,
      flat: contact?.flat,
      apartment: contact?.apartment,
      order_products: data,
      totalQuantity: totalQuantity,
      status: 'pending',
      condition: isChecked ? 'Cash On Delivery' : 'Card Payment',
      shipping_fee: 29,
      total_price: Number(totalPrice + 29),
      cancel: '',
      createdAt: new Date(),
      paid: false,
    };

    fetch('https://fg-server.vercel.app/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cashOnDeliveryData),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.status === true) {
          ToastAndroid.show('Order Success', ToastAndroid.SHORT);
          Alert.alert('Order Success');
          navigation.navigate('OrderHistory');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Confirm Your Order" />

      <ScrollView
        style={{flex: 1, marginBottom: 80}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 5,
          }}>
          <View style={{borderWidth: 1, borderColor: '#E1E7EF'}}>
            <PlaceOrderItem data={data} />
            <View style={{padding: 15}}>
              <View style={styles.subContainer}>
                <Text style={styles.text}>Total Quantity </Text>
                <Text style={styles.text}>{totalQuantity}</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.text}>SubTotal: </Text>
                <Text style={styles.text}> ৳{totalPrice}</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.text}>Shipping Fee: </Text>
                <Text style={styles.text}> ৳29</Text>
              </View>
              <View style={styles.subContainer}>
                <Text style={styles.text}>Total : </Text>
                <Text style={styles.text}> ৳{totalPrice + 29}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{marginTop: 15}}>
          <View style={{padding: 5}}>
            <Text style={styles.title}>Fill Your Information</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: 5,
            }}>
            <TextInput
              style={styles.anotherTextInput}
              placeholder="Flat No"
              value={contact.flat}
              onChangeText={flat => setContact({...contact, flat})}
            />
            <TextInput
              style={styles.anotherTextInput}
              placeholder="Apartment"
              value={contact?.apartment}
              onChangeText={apartment => setContact({...contact, apartment})}
            />
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={contact?.name}
            onChangeText={name => setContact({...contact, name})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={contact?.email}
            onChangeText={email => setContact({...contact, email})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Address"
            value={contact?.address}
            onChangeText={address => setContact({...contact, address})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            value={contact?.phone}
            onChangeText={phone => setContact({...contact, phone})}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <LinearGradient
            colors={['#466984', '#0D2341']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{
              width: '80%',
              height: 55,
              borderRadius: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 20}}>
              Select Your Payment System
            </Text>
            <AntDesign name="down" size={20} color="#fff" />
          </LinearGradient>
        </View>

        {/* cash on Delivery */}
        <View style={{...styles.commonColumnFlex, marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={styles.commonContainer}>
            <CheckBox disabled={false} value={isChecked} style={{}} />
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
              Cash On Delivery
            </Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Stripe', {data: payData})}
              style={styles.payButton}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.ibb.co/cYYqPrS/Pay-With-Card.png'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Bkash', {data: payData})}
              style={styles.payButton}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.ibb.co/cXnyCPZ/Pay-With-Card-1.png'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Nagad', {data: payData})}
              style={{...styles.payButton, marginBottom: 50}}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://i.ibb.co/qNhpW88/Pay-With-Card-2.png'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 10,
          right: 0,
          left: 0,
        }}>
        <TouchableOpacity
          onPress={handleCashOnDeliveryOrder}
          style={{
            paddingVertical: 14,
            paddingHorizontal: 30,
            backgroundColor: isChecked ? '#966DF7' : '#CBD5E1',
            borderRadius: 7,
          }}
          disabled={
            !isChecked ||
            !contact?.name ||
            !contact?.email ||
            !contact?.phone ||
            !contact?.address ||
            !contact?.flat ||
            !contact?.apartment
          }>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Confirm Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PlaceOrder;

const styles = StyleSheet.create({
  textInput: {
    width: '97%',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  anotherTextInput: {
    width: '48%',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 5,
  },
  commonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 5,
    marginTop: 15,
  },
  commonColumnFlex: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  payButton: {
    width: 200,
    height: 80,
    borderRadius: 10,
    marginTop: 15,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#000',
    margin: 6,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 1,
  },
});
