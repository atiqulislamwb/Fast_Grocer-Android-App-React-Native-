import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Categories from './Categories';
import {useNavigation} from '@react-navigation/native';

import {useGetGroceryCategoryQuery} from '../redux/services/fastGrocerApi';

const HomeCategory = () => {
  const navigation = useNavigation();

  const {data, isLoading} = useGetGroceryCategoryQuery();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading && <ActivityIndicator size="large" color="#CAD4E0" />}
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
          <Categories item={category} key={category?._id} />
        ))}
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
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
    </ScrollView>
  );
};

export default HomeCategory;

const styles = StyleSheet.create({});

{
  /* <FlatList
data={categories}
keyExtractor={item => item._id}
renderItem={({item}) => <Categories item={item} />}
showsVerticalScrollIndicator={false}
/> */
}
