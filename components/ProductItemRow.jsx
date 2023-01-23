import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CartButton from './CartButton';

const ProductItemRow = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          width: '80%',
          padding: 1,
        }}
        onPress={() => navigation.navigate('ProductDetails', {data: item})}>
        <View
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
        </View>
        <View style={styles.container2}>
          <View
            style={{
              height: 40,
              width: '75%',
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: 11,
                marginLeft: 2,
              }}>
              {item?.name}
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#F70000',
                fontSize: 13,

                fontWeight: 'bold',
              }}>
              ৳{item?.price}
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
                }}>
                {item?.bundle}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: '20%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 4,
        }}>
        <CartButton data={item} />
      </View>
    </View>
  );
};

export default ProductItemRow;

const styles = StyleSheet.create({
  container: {
    padding: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
    borderBottomColor: '#CBD5E0',
    borderBottomWidth: 1,
  },
  container2: {
    display: 'flex',
    width: '100%',

    padding: 4,
    flexDirection: 'column',
  },
});

// <TouchableOpacity>
// <AntDesign name="pluscircleo" size={36} color="#6BA22C" />
// </TouchableOpacity>
