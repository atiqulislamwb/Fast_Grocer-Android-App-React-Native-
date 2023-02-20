import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
} from 'react-native';

import CommonHeader from '../components/CommonHeader';

import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const FileComplaint = () => {
  const [complainText, setComplainText] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const [cameraImage, setCameraImage] = useState(null);
  const navigation = useNavigation();

  async function openCamera() {
    let options = {
      saveToPhotos: true,
      mediaType: 'photo',
    };

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      setCameraImage(result.assets[0].uri);
    }
  }

  async function openImagePicker() {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    };

    const result = await launchImageLibrary(options);
    setPreviewImage(result.assets[0].uri);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="File a Complaint" />
      <View style={styles.container}>
        <Text style={{fontSize: 14, color: '#000', textAlign: 'center'}}>
          Please upload a photo of your complaint
        </Text>
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={openCamera} style={styles.button}>
            <AntDesign name="camerao" size={26} color="#79AB42" />
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePicker} style={styles.button}>
            <AntDesign name="file1" size={26} color="#79AB42" />
            <Text style={styles.text}>Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <View style={{}}>
          <View>
            {previewImage && (
              <View
                style={{padding: 5, borderColor: '#CBD5E1', borderWidth: 1}}>
                <TouchableOpacity
                  onPress={() => setPreviewImage(null)}
                  style={{}}>
                  <AntDesign name="close" size={27} color="#000" />
                </TouchableOpacity>
                <Image
                  source={{uri: previewImage}}
                  style={{width: 100, height: 100}}
                />
              </View>
            )}
            {cameraImage && (
              <View
                style={{
                  padding: 5,
                  borderColor: '#CBD5E1',
                  borderWidth: 1,
                }}>
                <TouchableOpacity
                  onPress={() => setCameraImage(null)}
                  style={{}}>
                  <AntDesign name="close" size={27} color="#000" />
                </TouchableOpacity>
                <Image
                  source={{uri: cameraImage}}
                  style={{width: 100, height: 100}}
                />
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 14, color: '#000', marginBottom: 5}}>
          Description (optional)
        </Text>
        <TextInput
          multiline={true}
          style={{
            backgroundColor: '#fff',
            width: '100%',
            borderRadius: 5,
            height: 80,
            padding: 2,
            borderColor: '#64748B',
            borderWidth: 1,
          }}
          placeholder="Ex: Quality of product is not required as expected"
          onChangeText={complainText => setComplainText(complainText)}
          value={complainText}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          columnGap: 20,
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button2}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button2, backgroundColor: '#79AB42'}}>
          <Text style={{...styles.text, color: '#fff'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FileComplaint;

const styles = StyleSheet.create({
  container: {
    padding: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '100%',
    height: 100,
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: '#79AB42',
    borderRadius: 10,
    padding: 10,

    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 15,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderColor: '#79AB42',
    borderWidth: 2,
    borderRadius: 15,
  },
  text: {
    fontSize: 16,
    color: '#79AB42',
    fontWeight: '600',
  },
  button2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    paddingVertical: 13,
    paddingHorizontal: 40,
    borderColor: '#79AB42',
    borderWidth: 2,
    borderRadius: 5,
  },
});
