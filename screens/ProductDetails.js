import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';

import CartButton from '../components/CartButton';
import CommonHeader from '../components/CommonHeader';

const ProductDetails = ({route, navigation}) => {
  const {data} = route.params;
  console.log('Product details');
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Product Details" />
      <ScrollView style={{padding: 5}} showsVerticalScrollIndicator={false}>
        <Text
          style={{
            color: '#000',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          {data?.name}
        </Text>
        <View
          style={{
            width: '100%',
            height: 330,
            marginTop: 17,
          }}>
          <Image
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            source={{uri: data?.imageUrl || data?.productImage}}
          />
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#F70000',
                fontSize: 21,

                fontWeight: 'bold',
              }}>
              ৳{data?.price}
            </Text>
            <Text
              style={{
                color: '#64748B',
                fontSize: 19,
                marginLeft: 10,
                textDecorationLine: 'line-through',
              }}>
              {data?.original_price ? `৳${data?.original_price}` : ``}
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
                  fontSize: 15,
                  color: '#000',
                }}>
                {data?.bundle}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            marginTop: 10,
            marginBottom: 10,
            paddingBottom: 15,
            borderBottomColor: '#CBD5E1',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PlaceOrder', {data: [{...data}]})
            }
            style={{
              backgroundColor: '#79AB42',
              paddingVertical: 11,
              paddingHorizontal: 16,
              borderRadius: 7,
              shadowColor: '#000000',
              shadowOffset: {width: 0, height: 5},
              shadowRadius: 2,
              elevation: 3,
            }}>
            <Text
              style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
          <CartButton data={data} />
        </View>
        <View>
          <Text
            style={{
              color: '#000',
              padding: 3,
              fontSize: 12,
              marginBottom: 100,
            }}>
            {data?.description}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 4,
          right: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              padding: 2,
              color: '#79AB42',
            }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 10,
    paddingHorizontal: 27,
    borderRadius: 20,
  },
});
