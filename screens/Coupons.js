import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Coupons = () => {
  const navigation = useNavigation();
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
            Coupons
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{width: '100%', height: 250}}>
          <Image
            source={{
              uri: 'https://i.ibb.co/njL4VMZ/Screenshot-2023-02-13-120328-removebg-preview.png',
            }}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.text}>No Coupons Yet</Text>
          <Text style={styles.text}>
            Coupons are automatically generated when you shop for ৳500
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Coupons;

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#929393',
  },
});
