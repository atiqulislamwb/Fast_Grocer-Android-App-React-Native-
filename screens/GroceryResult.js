import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ProductItemRow from '../components/ProductItemRow';
import {useNavigation} from '@react-navigation/native';
const GroceryResult = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `https://fgrocer.vercel.app/grocery-search?q=${searchText}`,
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [searchText]);

  console.log(data);

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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: 50,
              backgroundColor: '#F8FAFC',
              marginLeft: 20,
              borderRadius: 8,
            }}>
            <AntDesign
              style={{padding: 4}}
              name="search1"
              size={30}
              color="black"
            />
            <TextInput
              style={{
                height: 50,
                outlineWidth: 0,
                borderBottomWidth: 0,
                borderColor: 'transparent',

                borderWidth: 1,
                placeholderTextColor: 'black',
                placeholderTextSize: 16,
                width: 260,
              }}
              placeholder="Search Medicine Products"
              underlineColorAndroid="transparent"
              value={searchText}
              onChangeText={text => setSearchText(text)}
            />
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        {loading ? (
          <ActivityIndicator size="large" color="#6BA22C" />
        ) : (
          <>
            {data.length === 0 ? (
              <View>
                <Text>No Product Found</Text>
              </View>
            ) : (
              <View style={{padding: 2, marginBottom: 100}}>
                {data?.map(product => (
                  <ProductItemRow key={product._id} item={product} />
                ))}
              </View>
            )}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default GroceryResult;

const styles = StyleSheet.create({});
