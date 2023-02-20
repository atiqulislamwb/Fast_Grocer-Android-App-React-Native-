import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Timer from './Timer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import DailyDeal from './DailyDeal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Deal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();
  return (
    <View style={{width: '100%', paddingHorizontal: 4}}>
      <View
        style={{
          padding: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          columnGap: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EggClub')}
          style={{height: 100, marginTop: 10, width: 150}}>
          <Image
            source={{
              uri: 'https://i.ibb.co/72R52B4/Screenshot-2023-02-15-111221.png',
            }}
            style={{width: '100%', height: '100%', borderRadius: 10}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleModalOpen}
          style={{padding: 1, marginTop: 10, width: '60%'}}>
          <LinearGradient
            colors={['#8DD1FB', '#A4DFF1', '#B2E8EC']}
            style={{height: 100, borderRadius: 10}}>
            <View style={styles.wrapper}>
              <Text style={styles.mainText}>Daily Deals</Text>
              <View style={{marginTop: 10}}>
                <Timer />
              </View>
            </View>
            <View style={styles.wrapper}>
              <View style={{marginBottom: 15}}>
                <Text style={styles.subText}>
                  Shop over 99Tk to activate deal
                </Text>
                <Text style={styles.subText1}>*Limited Stock</Text>
              </View>
              <View style={styles.icon}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleModalClose}>
        <View onPress={handleModalClose} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <LinearGradient
              colors={['#8DD1FB', '#A4DFF1', '#B2E8EC']}
              style={{
                height: 200,
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}></LinearGradient>
            <View
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                position: 'absolute',
                top: 10,
                right: 10,
              }}
              onPress={handleModalClose}>
              <TouchableWithoutFeedback onPress={handleModalClose}>
                <AntDesign name="close" size={30} color="#000" />
              </TouchableWithoutFeedback>
            </View>
            <View>
              <DailyDeal />
            </View>
            <View style={{...styles.wrapper, marginTop: 15}}>
              <TouchableOpacity
                style={styles.shoppingButton}
                onPress={handleModalClose}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#fff',
                  }}>
                  Start Shopping
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Deal;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 2,
    columnGap: 8,
  },
  mainText: {
    fontSize: 16,
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
  shoppingButton: {
    backgroundColor: '#FF60A2',
    paddingVertical: 13,
    paddingHorizontal: 60,
    borderRadius: 6,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    height: '55%',
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
