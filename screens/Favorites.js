import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useContext} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Loader from '../components/Loader';
import {StateContext} from '../context/context';
import useAuth from './../hooks/useAuth';
import {useQuery} from '@tanstack/react-query';
import CommonHeader from '../components/CommonHeader';

const Favorites = ({navigation}) => {
  const {user} = useAuth();
  const {addItemToCart} = useContext(StateContext);

  const {
    data,
    isLoading,

    refetch: wishlistRefetch,
  } = useQuery({
    queryKey: ['wishlist', user?.email],
    queryFn: () =>
      fetch(`https://fg-server.vercel.app/wishlist/${user?.email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      }).then(res => res.json()),
  });

  const removeFromWishlist = id => {
    fetch(`https://fg-server.vercel.app/wishlist/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === true) {
          wishlistRefetch();
          ToastAndroid.show('Item Remove', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
        }
      })
      .catch(err => console.log(err));
  };

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Favorites" />

      <ScrollView style={{padding: 4}} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {data?.data?.length === 0 && (
            <View style={{}}>
              <Text
                style={{
                  color: '#6E62EB',
                  fontSize: 20,
                  marginTop: 100,
                  textAlign: 'center',
                  marginLeft: 130,
                }}>
                No Favorite Item
              </Text>
            </View>
          )}
          {data?.data?.map((item, index) => (
            <View key={index} style={styles.container}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {data: item})
                }>
                <Image
                  source={{uri: item?.productImage}}
                  style={{
                    width: '100%',
                    height: 95,
                  }}
                  resizeMode="contain"
                />

                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}>
                  <AntDesign
                    onPress={() => removeFromWishlist(item?._id)}
                    name="heart"
                    color="#F70000"
                    size={25}
                  />
                </View>
                <View style={styles.container2}>
                  <Text
                    style={{
                      color: '#F70000',
                      fontSize: 13,
                      marginRight: 6,
                      fontWeight: 'bold',
                    }}>
                    ৳{item?.productPrice}
                  </Text>
                  <Text
                    style={{
                      color: '#64748B',
                      fontSize: 9,
                      textDecorationLine: 'line-through',
                    }}>
                    {item?.productOriginalPrice
                      ? `৳${item?.productOriginalPrice}`
                      : ``}
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 30,
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 11,
                      marginLeft: 2,
                    }}>
                    {item?.productName?.length > 30
                      ? `${item?.productName?.slice(0, 30)}...`
                      : `${item?.productName}`}
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                  flexDirection: 'row',
                  marginTop: 8,
                }}>
                <Text
                  style={{
                    color: '#64748B',
                    fontSize: 11,
                    marginLeft: 2,
                  }}>
                  {item?.bundle}
                </Text>
                <TouchableOpacity onPress={() => addItemToCart(item)}>
                  <AntDesign name="pluscircleo" size={36} color="#6BA22C" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {data?.data?.length > 0 && (
        <View
          style={{
            position: 'absolute',
            bottom: 15,
            right: 0,
            left: 0,
          }}>
          <View style={{...styles.wrapper2, marginTop: 15}}>
            <TouchableOpacity style={styles.shoppingButton}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Add {data?.data?.length} items to bag
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    width: 120,
    margin: 5,
    marginBottom: 20,
    padding: 1,
  },
  container2: {
    display: 'flex',
    alignItems: 'center',
    padding: 2,
    flexDirection: 'row',
  },

  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  wrapper2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 2,
    columnGap: 8,
  },
  shoppingButton: {
    backgroundColor: '#79AB42',
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderRadius: 6,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
});
