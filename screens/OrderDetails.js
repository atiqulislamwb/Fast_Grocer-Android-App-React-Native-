import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ToastAndroid,
  Alert,
} from 'react-native';
import moment from 'moment';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import DeliveryProduct from '../components/DeliveryProduct';
import useOrder from '../hooks/useOrder';
import CommonHeader from '../components/CommonHeader';
const OrderDetails = ({route, navigation}) => {
  const [cancelText, setCancelText] = useState();
  const {refetch} = useOrder();
  const {data} = route.params;
  const deliveryTime = data?.deliveryTime
    ? moment(data?.deliveryTime).format('MMMM Do YYYY, h:mm:ss a')
    : null;

  const handleCanReq = id => {
    if (data?.deliver === true) {
      Alert.alert("Product Delivered and We don't accept any cancel request");
      return;
    }
    const cancel = 'Cancel Request Sent';
    fetch(`https://fg-server.vercel.app/cancel-order/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({cancel}),
    })
      .then(res => res.json())
      .then(data => {
        if (data?.status === true) {
          ToastAndroid.show('Cancel Request Sent', ToastAndroid.SHORT);
          setCancelText('');
          refetch();
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <SafeAreaView
      style={{
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
      }}>
      <CommonHeader title="Your Order Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 24, color: '#000', fontWeight: 'bold'}}>
            Order Information
          </Text>
          <View style={styles.row}>
            <Text style={{fontSize: 16, color: '#79AB42', fontWeight: '600'}}>
              ID:
            </Text>
            <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
              {data?._id?.slice(0, 10)}...
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 2,
          }}>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            Delivery To
          </Text>
          <Text style={{fontSize: 14, color: '#064E3B', fontWeight: '600'}}>
            Status: {data?.status}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 120,
            borderRadius: 5,
            marginTop: 10,
            borderColor: '#E5E7EB',
            borderWidth: 1,
          }}>
          <View style={{width: 120, padding: 5}}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 5}}
              source={{
                uri: 'https://i.ibb.co/jzKHB42/Screenshot-2023-01-26-231556.png',
              }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginLeft: 5,
              rowGap: 8,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: 4,
                height: 30,
                marginBottom: 5,
              }}>
              <View style={{}}>
                <Entypo name="location-pin" size={20} color="#9CA3AF" />
              </View>
              <View style={{width: 250, height: 50}}>
                <Text style={{fontSize: 14, color: '#000', fontWeight: 'bold'}}>
                  {data?.address}
                </Text>
              </View>
            </View>
            <View style={{...styles.row, columnGap: 4}}>
              <View style={{}}>
                <Ionicons name="person" size={17} color="#9CA3AF" />
              </View>
              <Text
                style={{fontSize: 13, color: '#9CA3AF', fontWeight: 'bold'}}>
                {data?.name}
              </Text>
            </View>
            <View style={{...styles.row, columnGap: 4}}>
              <View style={{}}>
                <Ionicons name="call" size={16} color="#9CA3AF" />
              </View>
              <Text
                style={{fontSize: 13, color: '#9CA3AF', fontWeight: 'bold'}}>
                {data?.number}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#EEF1FA',
            marginTop: 10,
            marginBottom: 10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3,
            justifyContent: 'space-evenly',
          }}>
          <Text style={{fontSize: 15, color: '#000', fontWeight: '600'}}>
            Delivery Time
          </Text>
          <Text style={{fontSize: 15, color: '#1E293B', fontWeight: '500'}}>
            {deliveryTime ? deliveryTime.slice(0, 17) : '2-3 Working Days'}
          </Text>
          <Text style={{fontSize: 15, color: '#1E293B', fontWeight: '500'}}>
            {deliveryTime ? deliveryTime.slice(18, 30) : null}
          </Text>

          <Text style={{fontSize: 15, color: '#000', fontWeight: '500'}}>
            {data?.paid === false ? 'Not Paid' : 'Paid'}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: 5,
            marginTop: 10,
            borderColor: '#E5E7EB',
            borderWidth: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: 10,
            }}>
            {data?.order_products?.map(item => (
              <DeliveryProduct key={item?._id} item={item} />
            ))}
          </View>
          <View
            style={{
              marginLeft: 30,
              marginTop: 15,
            }}>
            <View>
              <Text style={{fontSize: 15, color: '#1E293B', fontWeight: '500'}}>
                Subtotal : ({data?.totalQuantity} Items)
              </Text>
            </View>
            <View style={styles.wrapper}>
              <Text style={{fontSize: 15, color: '#1E293B', fontWeight: '500'}}>
                Shipping fee
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: '#1E293B',
                  fontWeight: '800',
                  marginRight: 15,
                }}>
                ৳ {data?.shipping_fee}
              </Text>
            </View>
            <View style={{...styles.wrapper, marginBottom: 15}}>
              <Text style={{fontSize: 20, color: '#79AB42', fontWeight: '700'}}>
                Total
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#79AB42',
                  fontWeight: '800',
                  marginRight: 15,
                }}>
                ৳ {data?.total_price}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 30,
            backgroundColor: '#EEF1FA',
            marginTop: 17,
            marginBottom: 3,

            padding: 3,
          }}>
          <Text style={{fontSize: 14, color: '#000', fontWeight: '600'}}>
            {data?.deliver ? `Return Note` : `Cancel Note`}
          </Text>
        </View>
        <View
          style={{
            margin: 5,
            padding: 5,
          }}>
          {data?.cancel === '' && !data?.deliver && (
            <TextInput
              multiline={true}
              style={{
                backgroundColor: '#F8F9FD',
                width: '100%',
                borderRadius: 5,
                height: 100,
                padding: 4,
              }}
              placeholder="Please tell us why you cancel order Thank you!"
              onChangeText={cancelText => setCancelText(cancelText)}
              value={cancelText}
            />
          )}

          {data?.deliver && (
            <TextInput
              multiline={true}
              style={{
                backgroundColor: '#F8F9FD',
                width: '100%',
                borderRadius: 5,
                height: 100,
                padding: 4,
              }}
              placeholder="Please tell us why you return products? Thank you!"
              onChangeText={cancelText => setCancelText(cancelText)}
              value={cancelText}
            />
          )}
        </View>
        <View
          style={{
            ...styles.row,
            columnGap: 15,
            padding: 3,
            marginTop: 15,
            marginBottom: 50,
          }}>
          {data?.cancel && !data?.deliver && (
            <View>
              <Text
                style={{
                  color: '#DC2626',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                {data?.cancel}
              </Text>
            </View>
          )}
          {!data?.cancel && !data?.deliver && (
            <TouchableOpacity
              onPress={() => handleCanReq(data?._id)}
              disabled={cancelText === ''}
              style={{
                width: '45%',
                borderRadius: 5,
                borderColor: '#E2E8F0',
                ...styles.row,
                borderWidth: 1,
                paddingVertical: 15,
                paddingHorizontal: 15,
                backgroundColor: cancelText === '' ? '#E1E7F0' : '#DC2626',
              }}>
              {data?.cancel === '' && (
                <Text
                  style={{
                    color: cancelText === '' ? '#000' : '#fff',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Cancel Order
                </Text>
              )}
            </TouchableOpacity>
          )}
          {data?.deliver && (
            <TouchableOpacity
              onPress={() => handleCanReq(data?._id)}
              disabled={cancelText === ''}
              style={{
                width: '45%',
                borderRadius: 5,
                borderColor: '#E2E8F0',
                ...styles.row,
                borderWidth: 1,
                paddingVertical: 15,
                paddingHorizontal: 15,
                backgroundColor: '#DC2626',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Return Product
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{
              width: '45%',
              borderRadius: 5,
              ...styles.row,
              paddingVertical: 15,
              paddingHorizontal: 15,
              backgroundColor: data?.deliver !== true ? '#E1E7F0' : '#79AB42',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 16}}>
              Write a Review
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 4,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 1,
    marginTop: 5,
  },
});
