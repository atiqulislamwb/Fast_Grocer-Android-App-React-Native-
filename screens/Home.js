import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  DrawerLayoutAndroid,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Animated,
  PanResponder,
  Image,
} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {StateContext} from '../context/context';
import Drawer from '../components/Drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeTab from '../components/HomeTab';
import DrawerContent from '../components/DrawerContent';
import {useGetAllGroceryProducts} from '../redux/services/fastGrocerApi';
const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnim] = useState(new Animated.Value(0));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    Animated.timing(drawerAnim, {
      toValue: !drawerOpen ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if (gestureState.dx > 5) {
          return true;
        }
        return false;
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > 0) {
          setDrawerOpen(true);
          Animated.timing(drawerAnim, {
            toValue: gestureState.dx / 150,
            duration: 0,
            useNativeDriver: true,
          }).start();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 75) {
          Animated.timing(drawerAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }).start();
        } else {
          setDrawerOpen(false);
          Animated.timing(drawerAnim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar animated={true} />
      <View {...panResponder.panHandlers} style={styles.container}>
        <View style={styles.container2}>
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <AntDesign name="menu-fold" color="black" size={33} />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#6BA22C',
                padding: 3,
                width: 30,
                height: 30,
                borderRadius: 20,
                marginRight: 10,
              }}>
              <Entypo name="location-pin" color="white" size={22} />
            </View>
            <View>
              <Text
                style={{fontSize: 16, color: '#000000', fontWeight: 'bold'}}>
                Dhaka
              </Text>
            </View>
          </View>
          <View style={{marginLeft: 120, marginTop: 10}}>
            <Image
              source={require('../assets/appLogo.png')}
              style={{width: 115, height: 140}}
              resizeMode="contain"
            />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeTab />
        </ScrollView>
        <Animated.View
          style={[
            styles.drawerContainer,
            {
              transform: [
                {
                  translateX: drawerAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-310, 0],
                  }),
                },
              ],
            },
          ]}>
          <DrawerContent toggleDrawer={toggleDrawer} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton: {
    padding: 10,
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 310,
    backgroundColor: '#FAFAFA',
    padding: 5,
    zIndex: 10000,
  },
  drawer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    height: 70,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: 'white',
    zIndex: 10000,
  },
});

export default Home;
