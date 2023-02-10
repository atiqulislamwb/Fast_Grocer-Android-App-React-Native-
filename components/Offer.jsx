import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import useOfferProduct from '../hooks/useOfferProduct';

const Offer = () => {
  const {OfferProducts, isLoading} = useOfferProduct();

  const navigation = useNavigation();
  const products = OfferProducts?.data;
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 7,
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
          Offer
        </Text>
        <TouchableOpacity>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 14, color: '#6BA22C'}}> View More</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={20}
              color="#6BA22C"
            />
          </View>
        </TouchableOpacity>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#6BA22C" />}
      <View style={{padding: 2}}>
        <FlatList
          data={products}
          keyExtractor={item => item._id}
          renderItem={({item}) => (
            <View style={styles.wrapper}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {data: item})
                }>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 15,
                  }}
                  source={{uri: item?.imageUrl}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Offer;

const styles = StyleSheet.create({
  wrapper: {
    width: 210,
    height: 140,
    padding: 4,
  },
});
