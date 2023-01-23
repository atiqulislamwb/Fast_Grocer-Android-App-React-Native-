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

const uri1 = 'https://i.ibb.co/PQkCH2J/cooking.webp';
const uri2 = 'https://i.ibb.co/strvQwQ/all-meds.webp';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 12,
          height: 70,
          backgroundColor: '#F1F5F9',
          shadowColor: '#000000',
          shadowOffset: {width: 0, height: 5},
          shadowRadius: 2,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 9,
            }}>
            Search
          </Text>
        </View>
      </View>

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
          borderRadius: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          navigation.navigate('GroceryResult');
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
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
          borderRadius: 20,
          marginLeft: 20,
          marginRight: 20,
        }}
        onPress={() => {
          navigation.navigate('PharmacyResult');
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
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
