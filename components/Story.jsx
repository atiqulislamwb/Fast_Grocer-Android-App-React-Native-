import {
  Modal,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Story = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.container}>
        <ImageBackground
          source={{uri: item?.image}}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>{item?.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <SafeAreaView>
          <ImageBackground
            source={{uri: item?.image}}
            resizeMode="cover"
            style={styles.image}>
            <View
              style={{
                position: 'absolute',
                right: 20,
                top: 10,
              }}>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  padding: 7,
                  borderRadius: 6,
                }}>
                <AntDesign name="closesquare" size={45} color="#E2E8F0" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 40,
                left: 0,
                right: 0,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#79AB42',
                  paddingHorizontal: 25,
                  paddingVertical: 15,
                  borderRadius: 6,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#fff',
                    fontWeight: 'bold',
                  }}>
                  Visit Now
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </Modal>
    </View>
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
    borderRadius: 5,
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
