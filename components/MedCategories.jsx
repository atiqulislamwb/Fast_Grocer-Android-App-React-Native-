import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import MedCategory from './MedCategory';
import {useGetMedCategoryQuery} from '../redux/services/fastGrocerApi';

const MedCategories = () => {
  const {data, isLoading} = useGetMedCategoryQuery();
  const navigation = useNavigation();
  return (
    <View>
      {isLoading && <ActivityIndicator size="large" color="#CBD5E1" />}
      <View
        style={{
          marginTop: 10,
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {data?.data?.slice(0, 4).map(category => (
          <MedCategory item={category} key={category?._id} />
        ))}
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('MedCategories')}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#527a24',
            }}>
            All Categories
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MedCategories;

const styles = StyleSheet.create({});
