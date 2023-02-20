import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

import {storyData} from '../constant/storyData';
import Story from './Story';
import Deal from './Deal';
import HomeCategory from './HomeCategory';
import {ScrollView} from 'react-native-gesture-handler';
import FlashSales from './FlashSales';
import FreshVegetables from './FreshVegetables';
import Biscuits from './Biscuits';
import SaltSugar from './SaltSugar';
import FreshFruits from './FreshFruits';
import Noodles from './Noodles';
import Oil from './Oil';
import Offer from './Offer';
import Help from './Help';
import HomeCarousel from './HomeCarousel';

const Grocery = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <FlatList
        data={storyData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Story item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <Deal />
      <HomeCategory />
      <FlashSales />
      <FreshVegetables />
      <Biscuits />
      <SaltSugar />
      <HomeCarousel />
      <FreshFruits />
      <Noodles />
      <Oil />
      <Offer />
      <Help />
    </ScrollView>
  );
};

export default Grocery;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
