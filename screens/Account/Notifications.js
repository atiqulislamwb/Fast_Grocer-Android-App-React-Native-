import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import CommonHeader from '../../components/CommonHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Notifications = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Notification Settings" />
      <View
        style={{
          paddingHorizontal: 8,
          marginLeft: 10,
          paddingVertical: 4,
          marginTop: 5,
          marginRight: 10,
        }}>
        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={30}
              color="#86B455"
            />
            <Text style={styles.text}>Text Sms</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#86B455'}}
              thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="phone-outline"
              size={30}
              color="#86B455"
            />
            <Text style={styles.text}>Phone Call</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#86B455'}}
              thumbColor={isEnabled2 ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.wrapper}>
          <View style={styles.button}>
            <MaterialCommunityIcons
              name="email-outline"
              size={30}
              color="#86B455"
            />
            <Text style={styles.text}>Email Notifications</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#86B455'}}
              thumbColor={isEnabled3 ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.wrapper}}>
          <View style={{...styles.button, paddingLeft: 7}}>
            <Fontisto name="mobile-alt" size={30} color="#86B455" />
            <Text style={styles.text}>Push Notifications</Text>
          </View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#86B455'}}
              thumbColor={isEnabled4 ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch4}
              value={isEnabled4}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: '900'}}>
          Save
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 15,
  },
  text: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: '#86B455',
    width: '90%',
    paddingVertical: 14,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 10,
  },
});
