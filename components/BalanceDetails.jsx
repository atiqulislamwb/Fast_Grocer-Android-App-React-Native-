import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BalanceDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalTranslateY = useState(new Animated.Value(0))[0];
  const modalOpacity = useState(new Animated.Value(0))[0];
  const modalScale = useState(new Animated.Value(0.5))[0];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const showModal = () => {
    Animated.parallel([
      Animated.timing(modalTranslateY, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(modalOpacity, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(modalScale, {
        toValue: 1,
        duration: 300,
      }),
    ]).start();
  };

  const hideModal = () => {
    Animated.parallel([
      Animated.timing(modalTranslateY, {
        toValue: 0,
        duration: 300,
      }),
      Animated.timing(modalOpacity, {
        toValue: 0,
        duration: 300,
      }),
      Animated.timing(modalScale, {
        toValue: 0.5,
        duration: 300,
      }),
    ]).start();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleModal}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 13, color: '#79AB42', fontWeight: '700'}}>
          Balance Details
        </Text>

        <MaterialIcons name="keyboard-arrow-right" size={20} color="#79AB42" />
      </TouchableOpacity>

      {isModalVisible && (
        <Animated.View
          style={[
            styles.modal,
            {
              transform: [
                {
                  translateY: modalTranslateY.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
                {
                  scale: modalScale,
                },
              ],
              opacity: modalOpacity,
            },
          ]}>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default BalanceDetails;

const styles = StyleSheet.create({
  container: {},
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    backgroundColor: '#000',
    padding: 20,
  },
});
