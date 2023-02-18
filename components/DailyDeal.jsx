import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import React, {useState} from 'react';
import Timer from './Timer';
import {useNavigation} from '@react-navigation/native';

const item = {
  _id: '63c3cc520243f25628853vc41',
  name: 'Cadbury Dairy Milk Silk Fruit & Nut Chocolate..',
  description: '',
  price: 599,
  original_price: 799,
  save: '14%',
  bundle: '230 gm',
  imageUrl:
    'https://chaldn.com/_mpimage/cadbury-dairy-milk-silk-fruit-nut-chocolate-bar-free-cadbury-dairy-milk-chocolate-55-gm-137-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D127914&q=best&v=1&m=400&webp=1',
  category: 'Food',
  quantity: 1,
  status: 'daily&deals',
  stock: 100,
};

const ProgressBar = ({progress}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, {width: `${progress}%`}]} />
    </View>
  );
};
const DailyDeal = () => {
  return (
    <View>
      <View>
        <Text style={styles.mainText}>Daily Deals</Text>
        <Text style={styles.subText}>Order over ৳99 to activate </Text>
        <Text style={styles.subText1}>*Limited Stock</Text>
      </View>
      <View style={{padding: 18}}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 15,
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 5,
          }}>
          <TouchableOpacity
            //  onPress={()=> navigation.navigate("ProductDetails",{data:item})}

            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{width: 100, height: 130}}>
              <Image
                source={{
                  uri: item?.imageUrl,
                }}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '50%'}}>
              <Text style={{fontSize: 13, color: '#000', fontWeight: 'bold'}}>
                {item?.name}
              </Text>
              <Text style={{fontSize: 11, color: '#000'}}>{item?.bundle}</Text>
              <View
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  columnGap: 5,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 11, color: '#000'}}>at</Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: '#5CBBF9',
                    fontWeight: 'bold',
                  }}>
                  ৳{item?.price}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    color: '#000',
                    textDecorationLine: 'line-through',
                  }}>
                  ৳{item?.original_price}
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={styles.percentage}>
                <Text
                  style={{
                    fontSize: 11,
                    color: '#fff',
                    fontWeight: 'bold',
                  }}>
                  {item?.save} Off
                </Text>
              </View>
              <View style={{...styles.percentage, backgroundColor: '#FF60A2'}}>
                <Text style={{fontSize: 12, color: '#fff'}}> Daily...</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#D5E6F8',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View style={{padding: 8, width: '70%'}}>
              <Text style={{marginBottom: 10, fontSize: 13, color: '#334155'}}>
                ৳69 from activating today's deal{' '}
              </Text>
              <ProgressBar progress={40} style={{marginTop: 5}} />
            </View>
            <View>
              <Timer />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DailyDeal;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  mainText: {
    fontSize: 22,
    marginTop: 10,
    marginLeft: 20,
    fontWeight: 'bold',
    color: '#291453',
  },
  subText: {
    fontSize: 14,
    marginTop: 8,
    fontWeight: '600',
    marginLeft: 20,
    color: '#291453',
  },
  subText1: {
    fontSize: 11,
    color: '#291453',
    fontWeight: '600',
    marginLeft: 20,
  },
  icon: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  container: {
    height: 6,
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#00A23C',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  percentage: {
    width: 60,
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5ABCF9',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    marginBottom: 5,
    padding: 3,
  },
});
