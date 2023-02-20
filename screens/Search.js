import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import CommonHeader from '../components/CommonHeader';

const uri1 = 'https://i.ibb.co/PQkCH2J/cooking.webp';
const uri2 = 'https://i.ibb.co/strvQwQ/all-meds.webp';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F1F5F9', width: '100%'}}>
      <CommonHeader title="Search" />

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '90%',
          backgroundColor: '#ffffff',
          marginTop: 30,
          borderRadius: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          navigation.navigate('GroceryResult');
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          Grocery Search
        </Text>
        <View
          style={{
            width: 200,
            height: 70,
          }}>
          <Image
            source={{uri: uri1}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 70,
          width: '90%',
          backgroundColor: '#ffffff',
          marginTop: 20,
          borderRadius: 10,
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          navigation.navigate('PharmacyResult');
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
          Medicine Search
        </Text>
        <View
          style={{
            width: 200,
            height: 70,
          }}>
          <Image
            source={{uri: uri2}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Search;
