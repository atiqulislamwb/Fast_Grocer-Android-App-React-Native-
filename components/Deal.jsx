import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Timer from './Timer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Deal = () => {
  return (
    <TouchableOpacity style={{padding: 4, marginTop: 10}}>
      <LinearGradient
        colors={['#8DD1FB', '#A4DFF1', '#B2E8EC']}
        style={{width: '100%', height: 100, borderRadius: 10}}>
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.mainText}>Daily Deals</Text>
            <Text style={styles.subText}>Shop over 99Tk to activate deal</Text>
            <Text style={styles.subText1}>*Limited Stock</Text>
          </View>
          <View style={{}}>
            <Timer />
            <View style={styles.icon}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={28}
                color="black"
              />
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Deal;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',

    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  mainText: {
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#001731',
  },
  subText: {
    fontSize: 11,
    marginTop: 8,
    fontWeight: '600',
    color: '#001731',
  },
  subText1: {
    fontSize: 10,
    color: '#001731',
    fontWeight: '600',
  },
  icon: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
