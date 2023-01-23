import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
const HomeCarousel = () => {
  return (
    <View style={{width: '100%', padding: 7, height: 300}}>
      <Swiper autoplay={true} autoplayTimeout={3} showsPagination={true}>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/1.webp')}
          />
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/2.webp')}
          />
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/3.webp')}
          />
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/4.webp')}
          />
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/5.webp')}
          />
        </View>
        <View>
          <Image
            resizeMode="contain"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={require('../assets/carousel/6.webp')}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default HomeCarousel;

const styles = StyleSheet.create({});
