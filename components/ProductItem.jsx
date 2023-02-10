import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {StateContext} from '../context/context';
import useAuth from '../hooks/useAuth';

const ProductItem = ({item}) => {
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState();
  const navigation = useNavigation();
  const {user} = useAuth();
  const {addItemToCart} = useContext(StateContext);

  const addToWishlist = item => {
    if (!user) {
      ToastAndroid.show('Please login', ToastAndroid.SHORT);
    } else {
      const data = {
        productId: item?._id,
        productName: item?.name,
        productPrice: item?.price,
        productOriginalPrice: item?.original_price,
        productImage: item?.imageUrl,
        categoryName: item?.category_name,
        subCategoryName: item?.sub_category,
        userName: user?.displayName,
        email: user?.email,
        bundle: item?.bundle,
        createdAt: new Date(),
      };

      setLoading(true);
      fetch('https://fg-server.vercel.app/wishlist', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          if (data.status === true) {
            setLoading(false);
            setToggle(!toggle);

            ToastAndroid.show('Visit Favorite Page', ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
          }
        })
        .catch(error => console.log(error));
      setLoading(false);
    }
  };
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
          setToggle(!toggle);

          ToastAndroid.show('Item Remove', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Something went wrong', ToastAndroid.SHORT);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', {data: item})}>
        <Image
          source={{uri: item?.imageUrl}}
          style={{
            width: '100%',
            height: 95,
          }}
          resizeMode="contain"
        />
        {user && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}>
            {toggle ? (
              <AntDesign
                onPress={() => removeFromWishlist(item?._id)}
                name="heart"
                color="#F70000"
                size={25}
              />
            ) : (
              <AntDesign
                onPress={() => addToWishlist(item)}
                name="hearto"
                color="#6BA22C"
                size={25}
              />
            )}
          </View>
        )}
        <View style={styles.container2}>
          <Text
            style={{
              color: '#F70000',
              fontSize: 13,
              marginRight: 6,
              fontWeight: 'bold',
            }}>
            ৳{item?.price}
          </Text>
          <Text
            style={{
              color: '#64748B',
              fontSize: 9,
              textDecorationLine: 'line-through',
            }}>
            {item?.original_price ? `৳${item?.original_price}` : ``}
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
            {item?.name?.length > 30
              ? `${item?.name?.slice(0, 30)}...`
              : `${item?.name}`}
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
  );
};

export default ProductItem;

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
});
