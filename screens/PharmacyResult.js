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
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ProductItemRow from '../components/ProductItemRow';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from '@tanstack/react-query';
const PharmacyResult = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const {data, isLoading, isError, error} = useQuery({
    queryKey: ['med-search', searchText],
    queryFn: () =>
      fetch(`https://fgrocer.vercel.app/med-search?q=${searchText}`).then(res =>
        res.json(),
      ),
    keepPreviousData: true,
  });

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
                borderBottomWidth: 0,
                borderColor: 'transparent',
                borderWidth: 1,
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
        {isLoading ? (
          <ActivityIndicator size="large" color="#6BA22C" />
        ) : (
          <>
            {data.length === 0 ? (
              <View>
                <Text>No Product Found</Text>
              </View>
            ) : (
              <View
                style={{
                  padding: 2,
                  marginBottom: 100,
                  backgroundColor: '#fff',
                  flex: 1,
                }}>
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

export default PharmacyResult;

const styles = StyleSheet.create({});
