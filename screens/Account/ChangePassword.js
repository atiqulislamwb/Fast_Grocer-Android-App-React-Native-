import {
  StyleSheet,
  Text,
  useState,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CommonHeader from '../../components/CommonHeader.jsx';

const ChangePassword = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Change Password" />
      <View style={{padding: 8}}>
        <TextInput
          style={styles.textInput}
          placeholder="Current Password"
          //value={currentPassword}
          //onChangeText={currentPassword => setCurrentPassword(currentPassword)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="New Password"
          //value={currentPassword}
          //onChangeText={currentPassword => setCurrentPassword(currentPassword)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Re-enter New Password"
          //value={currentPassword}
          //onChangeText={currentPassword => setCurrentPassword(currentPassword)}
        />
        <TouchableOpacity style={styles.saveButton}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '900'}}>
            Change Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    borderColor: '#CBD5E1',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 8,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#94A3B8',
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

export default ChangePassword;
