import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import CommonHeader from '../components/CommonHeader';
import {useGetMedCategoryQuery} from '../redux/services/fastGrocerApi';

const MedCategories = () => {
  const {data, isLoading} = useGetMedCategoryQuery();

  const navigation = useNavigation();
  const {width} = useWindowDimensions();
  const half = width / 2 - 15;

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <CommonHeader title="Medical Categories" />

      <View>
        <ScrollView
          style={{
            marginBottom: 60,
          }}
          showsVerticalScrollIndicator={false}>
          {isLoading && <ActivityIndicator size="large" color="#6BA22C" />}
          <View
            style={{
              marginTop: 5,
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {data?.data?.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  navigation.navigate('ProductByMedCategory', {data: item})
                }
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
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MedCategories;
