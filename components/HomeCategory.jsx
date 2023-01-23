import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Categories from './Categories';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';

const HomeCategory = () => {
  const navigation = useNavigation();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/categories`).then(res => res.json()),
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {isLoading && <ActivityIndicator size="large" color="#6BA22C" />}
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
