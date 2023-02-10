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
import useMedCategories from '../hooks/useMedCategories';

const MedCategories = () => {
  const {medCategories, isMedCategoriesLoading} = useMedCategories();
  const navigation = useNavigation();
  return (
    <View>
      {isMedCategoriesLoading && (
        <ActivityIndicator size="large" color="#6BA22C" />
      )}
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
        {medCategories?.data?.slice(0, 4).map(category => (
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
