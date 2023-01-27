import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from '../screens/Categories';
import {useNavigation} from '@react-navigation/native';
import Search from './../screens/Search';
const Tab = createBottomTabNavigator();

const TabView = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();

      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#6BA22C',
        headerShown: false,

        tabBarStyle: {
          paddingBottom: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 60,
          color: '#00000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
          backgroundColor: '#ffffff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={{
                  color: focused ? '#6BA22C' : '#A4A4A5',
                  fontWeight: '700',
                  fontSize: 13,
                }}>
                Home
              </Text>
            );
          },
          tabBarIcon: ({color, size}) => (
            <Foundation name="home" color={color} size={30} />
          ),
          // tabBarStyle: {
          //   fontWeight: 'bold',
          //   color: 'black',
          // },
        }}
      />
      <Tab.Screen
        name="Category"
        component={Categories}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={{
                  color: focused ? '#6BA22C' : '#A4A4A5',
                  fontWeight: '700',
                  fontSize: 13,
                }}>
                Category
              </Text>
            );
          },
          tabBarIcon: ({color, size}) => (
            <Feather name="grid" color={color} size={27} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={{
                  color: focused ? '#6BA22C' : '#A4A4A5',
                  fontWeight: '700',
                  fontSize: 13,
                }}>
                Cart
              </Text>
            );
          },
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: ({focused, color}) => {
            return (
              <Text
                style={{
                  color: focused ? '#6BA22C' : '#A4A4A5',
                  fontWeight: '700',
                  fontSize: 13,
                }}>
                Search
              </Text>
            );
          },
          tabBarIcon: ({color, size}) => (
            <AntDesign name="search1" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TabView;
