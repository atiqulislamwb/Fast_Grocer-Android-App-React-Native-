import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PlaceOrderItem = ({data}) => {
  return (
    <View>
      <Text style={styles.title}>Your Picked Item</Text>
      <View>
        {data?.map((item, i) => (
          <View key={i} style={styles.wrapper}>
            <View style={{width: 80, height: 80, padding: 10}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{uri: item?.imageUrl}}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={{marginTop: 10, color: '#000'}}>{item?.name}</Text>
              <Text style={{color: '#000'}}>Quantity : {item?.quantity} </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PlaceOrderItem;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',

    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: '#000',
    margin: 6,
    fontWeight: 'bold',
  },
});
