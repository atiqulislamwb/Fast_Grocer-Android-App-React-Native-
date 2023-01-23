import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Story = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{uri: item?.image}}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>{item?.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 170,
    margin: 5,
    borderRadius: 20,
    zIndex: 1000,
  },
  image: {
    width: '100%',
    height: '100%',

    borderRadius: 10,
  },
  text: {
    fontSize: 11,
    position: 'absolute',
    bottom: 2,
    fontWeight: 'bold',
    marginLeft: 2,
    color: 'white',
  },
});
