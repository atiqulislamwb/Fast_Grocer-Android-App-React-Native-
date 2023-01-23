import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Categories = ({item}) => {
  const {width} = useWindowDimensions();
  const half = width / 2 - 15;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductByCategory', {data: item})}
      style={{
        width: half,
        height: 120,
        margin: 5,
        elevation: 5, // This adds the shadow
        shadowColor: '#000000', // This controls the shadow color
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 5},
      }}>
      <Image
        resizeMode="contain"
        source={{uri: item?.url}}
        style={{width: '100%', height: '100%', borderRadius: 12}}
      />
    </TouchableOpacity>
  );
};

export default Categories;

const styles = StyleSheet.create({});
