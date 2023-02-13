import {
  Alert,
  Button,
  SafeAreaView,
  View,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {StateContext} from '../context/context';
import {
  CardField,
  StripeProvider,
  useStripe,
  useConfirmPayment,
  loading,
} from '@stripe/stripe-react-native';
import CommonHeader from '../components/CommonHeader';
const pk_test =
  'pk_test_51M6RZkBTug5LZU4zCk5W0QrAY49XMvfelTEHbrn78yqa2CdZeGxYBI306Oo2ZbcdKwsykWHnvcayykkCp1GwnDON000h0oFDBQ';

const Stripe = ({navigation, route}) => {
  const {data} = route.params;
  const price = data?.total_price / 100;
  console.log(data);
  return (
    <StripeProvider
      publishableKey={pk_test}
      merchantIdentifier="merchant.identifier">
      <SafeAreaView>
        <CommonHeader title="Payment With Card" />
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: 5,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '700',
              color: '#000',
            }}>
            Please pay ৳{data?.total_price}
          </Text>
        </View>
        <StripeTest totalPrice={price} data={data} />
      </SafeAreaView>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({});

const StripeTest = ({totalPrice, data}) => {
  const {confirmPayment, loading} = useConfirmPayment();

  const price = totalPrice;
  const [key, setKey] = useState('');

  useEffect(() => {
    fetch('https://fgrocer.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({price}),
    })
      .then(res => res.json())
      .then(data => {
        setKey(data?.clientSecret);
      })
      .catch(e => Alert.alert(e.message));
  }, []);

  const handleConfirmation = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: data?.email,
      name: data?.name,
    };

    // Confirm the payment with the card details
    const {paymentIntent, error} = await confirmPayment(key, {
      paymentMethodType: 'Card',
      paymentMethodData: {
        billingDetails,
      },
    });

    if (error) {
      //give alert
      ToastAndroid.show('Card details not complete', ToastAndroid.SHORT);
    } else if (paymentIntent) {
      const orderWithPayment = {
        ...data,
        createdAt: new Date(),
        paid: 'Already Paid',
        transactionId: paymentIntent?.id,
      };

      fetch('https://fg-server.vercel.app/order', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(orderWithPayment),
      })
        .then(res => res.json())
        .then(data => {
          if (data?.status === true) {
            ToastAndroid.show('Payment & Order Success', ToastAndroid.SHORT);
          }
        });
      ToastAndroid.show('Payment & Order Success', ToastAndroid.SHORT);
      Alert.alert('Payment & Order Success');
    }
  };
  return (
    <View>
      <CardField
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
          padding: 5,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          disabled={loading}
          onPress={handleConfirmation}
          style={{
            width: 150,
            height: 50,
            borderRadius: 5,

            backgroundColor: '#0EA5E9',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Stripe;
{
  /* <Button onPress={handleConfirmation} title="Pay" disabled={loading} /> */
}
