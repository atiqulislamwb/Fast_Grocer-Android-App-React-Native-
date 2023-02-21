import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Settings" />
      <View
        style={{
          paddingHorizontal: 8,
          marginLeft: 10,
          paddingVertical: 4,
          marginTop: 5,
          marginRight: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          style={styles.wrapper}>
          <View style={styles.button}>
            <FontAwesome name="bell-o" size={30} color="#86B455" />
            <Text style={styles.text}>Notifications Settings</Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.wrapper}>
          <View style={styles.button}>
            <SimpleLineIcons name="lock" size={30} color="#86B455" />
            <Text style={styles.text}>Change Password</Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('DeleteAccount')}
          style={styles.wrapper}>
          <View style={styles.button}>
            <FontAwesome name="user-circle-o" size={30} color="#86B455" />
            <Text style={styles.text}>Delete My Account</Text>
          </View>
          <View>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="#000" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

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
});
