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
import CommonHeader from '../components/CommonHeader';
import LinearGradient from 'react-native-linear-gradient';

import previousDeals from './../constant/previousDeals.js';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import DailyDeal from '../components/DailyDeal';

const Questions = ({question, answer}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View
      style={{
        borderColor: '#E2E8F0',
        borderBottomWidth: 1,
        paddingTop: 3,
        padding: 12,
      }}>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 14, color: '#000', width: '90%'}}>
          {question}
        </Text>
        {expanded ? (
          <Feather name="minus" size={28} color="black" />
        ) : (
          <Feather name="plus" size={28} color="black" />
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={{padding: 3}}>
          <Text style={{fontSize: 12}}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const DailyDeals = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Daily Deals" />
      <LinearGradient
        colors={['#8DD1FB', '#A4DFF1', '#B2E8EC']}
        style={{
          width: '100%',
          height: 160,
          position: 'absolute',
          top: 55,
          right: 0,
          left: 0,
        }}></LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DailyDeal />
        <View style={{padding: 8}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#3E3E3E',
              marginBottom: 18,
            }}>
            Previous Deals
          </Text>

          <FlatList
            data={previousDeals}
            keyExtractor={item => item?._id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', {data: item})
                }
                style={{
                  width: 300,
                  height: 130,
                  backgroundColor: '#fff',
                  shadowColor: '#000000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 5,
                  borderRadius: 30,
                  marginLeft: 10,
                  marginBottom: 10,
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View style={{width: 90, height: '100%', marginLeft: 10}}>
                  <Image
                    source={{
                      uri: item?.imageUrl,
                    }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>
                <View style={{marginLeft: 5, marginTop: 10, width: '60%'}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: '#3E3E3E',
                    }}>
                    {item?.name}
                  </Text>
                  <View
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 18,
                      padding: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#464646',
                      }}>
                      {' '}
                      {item?.bundle}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#383838',
                      }}>
                      ৳{item?.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 16,
              marginTop: 8,
              fontWeight: '600',
              color: '#000',
              borderBottomColor: '#E0E7EF',
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingLeft: 10,
            }}>
            FAQ
          </Text>
          <Questions
            question="What is “Daily Deals” ?"
            answer="“Daily Deals” is a special program for our customers where we 
              (Fast Grocer) offer a limited stock of one product daily with a special 
              price. In order to activate this offer, you have to order a 
              minimum order value."
          />
          <Questions
            question="How does it work ?"
            answer="Each day we will offer one product at a special price.
             This special deal can be activated through a specific minimum 
             order value. You will not be able to avail this deal
             if your order value does not meet the deal's requirements."
          />
          <Questions
            question="What is the minimum order value to activate the “Daily Deals”?"
            answer="The minimum order value depends on the product
             that will be allocated for the daily deal."
          />
          <Questions
            question="Is there any validity duration for the deal??"
            answer="Yes, 24 hours (1 day). However, you have to hurry as 
            the deal will be over once products are sold 
            out since stock for this special deal will be limited."
          />
        </View>
        <View style={{marginBottom: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DailyDeals;
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
