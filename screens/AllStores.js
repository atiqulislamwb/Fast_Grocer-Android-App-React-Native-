import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const AllStores = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          height: 55,
          borderBottomColor: '#EDF2F6',
          borderBottomWidth: 2,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 8,
            flexDirection: 'row',
            marginLeft: 6,
          }}>
          <AntDesign name="arrowleft" size={32} color="#000" />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              marginLeft: 12,
            }}>
            Stores
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 14,
          marginTop: 10,
          rowGap: 10,
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabView')}
          style={{
            width: '100%',
            height: 160,
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/Bgyj832/Screenshot-2023-02-10-235643.png',
            }}
            style={{width: '100%', height: '100%', borderRadius: 15}}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabView')}
          style={{
            width: '100%',
            height: 160,
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/sW0BmW2/Screenshot-2023-02-10-235720.png',
            }}
            style={{width: '100%', height: '100%', borderRadius: 15}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('TabView')}
          style={{
            width: '100%',
            height: 160,
          }}>
          <Image
            source={{
              uri: 'https://i.ibb.co/dQgWmvg/Screenshot-2023-02-10-235740.png',
            }}
            style={{width: '100%', height: '100%', borderRadius: 15}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AllStores;
