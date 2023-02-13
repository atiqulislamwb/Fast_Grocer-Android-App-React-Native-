import {
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import useOfferProduct from '../hooks/useOfferProduct';
import {useNavigation} from '@react-navigation/native';
import useAuth from './../hooks/useAuth';
import CartButton from './../components/CartButton';
import Loader from './../components/Loader';
const Offers = () => {
  const {OfferProducts, isLoading} = useOfferProduct();
  const {user} = useAuth();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const navigation = useNavigation();

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
  if (isLoading)
    return (
      <View
        style={{position: 'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
        <Loader />
      </View>
    );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
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
            Offers
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{padding: 5, rowGap: 20}}
        showsVerticalScrollIndicator={false}>
        {OfferProducts?.data?.map((item, i) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetails', {data: item})}
            key={i}
            style={{padding: 5}}>
            <View style={{width: '100%', height: 250}}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 5,
                }}
                source={{uri: item?.imageUrl}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#000', fontSize: 13}}>{item.name}</Text>
              <View>
                {user && (
                  <View>
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
              </View>
            </View>

            <View>
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
                <CartButton data={item} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Offers;
