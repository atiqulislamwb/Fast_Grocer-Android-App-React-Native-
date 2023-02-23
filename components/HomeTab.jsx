import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Grocery from './Grocery';
import Pharmacy from './Pharmacy';

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };
  const handlePress = () => {
    const url = 'https://atiqulislamwb.netlify.app/';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={{marginTop: 5}}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={{
            width: 110,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: activeTab === 'tab1' ? '#ffffff' : '#E2E8F0',
            borderRadius: 8,
            borderWidth: 1,
            padding: 4,
            backgroundColor: activeTab === 'tab1' ? '#F7CF6C' : '#ffffff',
          }}
          onPress={() => handleTabChange('tab1')}>
          <View
            style={{
              width: 26,
              height: 26,
              borderRadius: 15,
              backgroundColor: 'white',
              padding: 4,
              marginRight: 5,
            }}>
            <Image
              source={require('../assets/Grocery.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.text}>Grocery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 110,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: activeTab === 'tab2' ? '#ffffff' : '#E2E8F0',
            borderRadius: 8,
            borderWidth: 1,
            padding: 4,
            backgroundColor: activeTab === 'tab2' ? '#0072CE' : '#ffffff',
          }}
          onPress={() => handleTabChange('tab2')}>
          <View
            style={{
              width: 26,
              height: 26,
              borderRadius: 15,
              backgroundColor: 'white',
              padding: 4,
              marginRight: 4,
            }}>
            <Image
              source={require('../assets/medicine.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              color: activeTab === 'tab2' ? '#ffffff' : '#000000',
            }}>
            Pharmacy
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 110,
            height: 45,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#E2E8F0',
            borderRadius: 8,
            borderWidth: 1,
            padding: 4,
            backgroundColor: '#ffffff',
          }}
          onPress={handlePress}>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 15,
              backgroundColor: 'white',
              padding: 4,
            }}>
            <Image
              source={require('../assets/cooking.png')}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontSize: 13,
              fontWeight: '500',
              color: '#475569',
              marginRight: 5,
            }}>
            Contact Dev
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {activeTab === 'tab1' && (
          <View>
            <Grocery />
          </View>
        )}
        {activeTab === 'tab2' && (
          <View>
            <Pharmacy />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 2,
  },
  innerDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 4,
    width: 112,
    height: 50,
    backgroundColor: '#ffffff',
    borderColor: '#E2E8F0',
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
  },
});
export default HomeTab;
