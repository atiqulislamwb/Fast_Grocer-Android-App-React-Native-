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
import React, {useMemo, useRef, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeTab from '../components/HomeTab';
import DrawerContent from '../components/DrawerContent';
import {GiftedChat} from 'react-native-gifted-chat';
const Home = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnim] = useState(new Animated.Value(0));
  const [isDragging, setIsDragging] = useState(false);

  const contentPanResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (event, gestureState) => {
          // We only want to handle the gesture if it starts from the far left of the screen
          return (
            gestureState.dx < 5 &&
            gestureState.dx > -5 &&
            gestureState.dy < 5 &&
            gestureState.dy > -5
          );
        },
        onPanResponderGrant: (event, gestureState) => {
          setIsDragging(true);
        },
        onPanResponderRelease: (event, gestureState) => {
          setIsDragging(false);
          if (gestureState.dx < -10) {
            setDrawerOpen(false);
            Animated.timing(drawerAnim, {
              toValue: 0,
              duration: 250,
              useNativeDriver: true,
            }).start();
          }
        },
      }),
    [],
  );

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    Animated.timing(drawerAnim, {
      toValue: !drawerOpen ? 1 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: (evt, gestureState) => {
  //       if (gestureState.dx > 5) {
  //         return true;
  //       }
  //       return false;
  //     },
  //     onPanResponderMove: (evt, gestureState) => {
  //       if (gestureState.dx > 5) {
  //         setDrawerOpen(true); // use setDrawerOpen to update the state
  //         Animated.timing(drawerAnim, {
  //           toValue: 1,
  //           duration: 300,
  //           useNativeDriver: true,
  //         }).start();
  //       } else if (gestureState.dx < -5) {
  //         setDrawerOpen(false); // use setDrawerOpen to update the state
  //         Animated.timing(drawerAnim, {
  //           toValue: 0,
  //           duration: 300,
  //           useNativeDriver: true,
  //         }).start();
  //       }
  //       if (gestureState.dx < -150) {
  //         setDrawerOpen(false); // use setDrawerOpen to update the state
  //         Animated.timing(drawerAnim, {
  //           toValue: 0,
  //           duration: 300,
  //           useNativeDriver: true,
  //         }).start();
  //       }
  //     },
  //     onPanResponderRelease: (evt, gestureState) => {
  //       if (gestureState.dx > 75) {
  //         Animated.timing(drawerAnim, {
  //           toValue: 1,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }).start();
  //       } else {
  //         setDrawerOpen(false);
  //         Animated.timing(drawerAnim, {
  //           toValue: 0,
  //           duration: 250,
  //           useNativeDriver: true,
  //         }).start();
  //       }
  //     },
  //   }),
  // ).current;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <StatusBar animated={true} />

      <View style={styles.container2}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            columnGap: 10,
          }}>
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <AntDesign name="menu-fold" color="black" size={30} />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#6BA22C',
                padding: 3,
                width: 25,
                height: 25,
                borderRadius: 15,
                marginRight: 6,
              }}>
              <Entypo name="location-pin" color="white" size={20} />
            </View>
            <View>
              <Text style={{fontSize: 16, color: '#000000', fontWeight: '600'}}>
                Dhaka
              </Text>
            </View>
          </View>
        </View>
        <View style={{marginRight: 50}}>
          <Image
            source={require('../assets/appLogo.png')}
            style={{width: 80}}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView
        // {...panResponder.panHandlers}
        showsVerticalScrollIndicator={false}>
        <HomeTab />
      </ScrollView>
      <Animated.View
        {...contentPanResponder.panHandlers}
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
      <View style={{position: 'absolute', right: 10, bottom: 100}}>
        <GiftedChat />
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
    justifyContent: 'space-between',
    padding: 5,
    height: 55,
    borderBottomColor: '#E2E8F0',
    borderBottomWidth: 1,
    zIndex: 11,
    width: '100%',
  },
});

export default Home;
