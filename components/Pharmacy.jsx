import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MedCategories from './MedCategories';
import AllMed from './AllMed';
import MedicalDevices from './MedicalDevices';
import Vitamin from './Vitamin';
import BirthControl from './BirthControl';
import Offer from './Offer';
import Help from './Help';

const Pharmacy = () => {
  const uri = 'https://i.ibb.co/c6VGkXV/abc.png';
  const uri2 = 'https://i.ibb.co/V2byW3v/111.png';
  const uri3 = 'https://i.ibb.co/fXqpZFx/112.png';
  const uri4 = 'https://i.ibb.co/7QFc3RN/Screenshot-2023-01-16-215623.png';
  const uri5 = 'https://i.ibb.co/hs65h4k/114.png';

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 130,
          padding: 9,
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 15,
          }}
          resizeMode="contain"
          source={{uri: uri}}
        />
      </TouchableOpacity>
      <View>
        <MedCategories />
      </View>
      <AllMed />
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 130,
            padding: 9,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
            resizeMode="contain"
            source={{uri: uri5}}
          />
        </TouchableOpacity>
      </View>
      <MedicalDevices />
      <View
        style={{
          marginTop: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 400,
            padding: 9,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            resizeMode="contain"
            source={{uri: uri4}}
          />
        </TouchableOpacity>
      </View>
      <Vitamin />
      <BirthControl />
      <View
        style={{
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 155,
            padding: 9,
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 3,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
            resizeMode="contain"
            source={{uri: uri3}}
          />
        </TouchableOpacity>
      </View>
      <Offer />
      <View
        style={{
          marginTop: 15,
          marginBottom: 2,
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 155,
            padding: 9,
            shadowColor: '#000000',
            shadowOffset: {width: 2, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 3,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 15,
            }}
            resizeMode="contain"
            source={{uri: uri2}}
          />
        </TouchableOpacity>
      </View>
      <Help />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
export default Pharmacy;
