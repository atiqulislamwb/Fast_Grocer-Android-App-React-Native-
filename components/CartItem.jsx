import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import useCart from '../hooks/useCart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {StateContext} from '../context/context';

const CartItem = ({item}) => {
  const navigation = useNavigation();
  const {removeItemFromCart, handleDecrement, handleIncrement} =
    useContext(StateContext);

  const subPrice = Number(item?.quantity) * Number(item?.price);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          width: '100%',
          padding: 1,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {data: item})}
          style={{
            width: 100,
            height: 80,
          }}>
          <Image
            source={{uri: item?.imageUrl}}
            style={{
              width: '100%',
              height: 80,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', {data: item})}
            style={{
              height: 37,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 11,
                marginLeft: 2,
              }}>
              {item?.name}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '40%',
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                <Text
                  style={{
                    color: '#F70000',
                    fontSize: 13,

                    fontWeight: 'bold',
                  }}>
                  ৳{subPrice}
                </Text>
                <Text
                  style={{
                    color: '#64748B',
                    fontSize: 9,
                    marginLeft: 10,
                    textDecorationLine: 'line-through',
                  }}>
                  {item?.original_price ? `৳${item?.original_price}` : ``}
                </Text>
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderColor: 'gray',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      marginLeft: 5,
                      padding: 2,
                      fontSize: 12,
                    }}>
                    {item?.bundle}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '60%',
              }}>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() => removeItemFromCart(item?._id)}
                  style={{
                    marginRight: 5,
                  }}>
                  <View>
                    <MaterialCommunityIcons
                      name="delete-circle"
                      size={34}
                      color="#6BA22C"
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDecrement(item?._id)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 5,
                    backgroundColor: '#e7ffcd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <Entypo name="minus" size={25} color="#6BA22C" />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                    marginLeft: 2,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 15,
                    }}>
                    {item?.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => handleIncrement(item?._id)}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 5,
                    backgroundColor: '#e7ffcd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View>
                    <MaterialIcons name="add" size={25} color="#6BA22C" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 5,
    borderBottomColor: '#F1F5F9',
    borderBottomWidth: 1,
  },
  container2: {
    display: 'flex',
    padding: 4,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
