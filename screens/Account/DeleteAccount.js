import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';

const DeleteAccount = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', width: '100%'}}>
      <CommonHeader title="Delete My Account" />
      <View style={{padding: 8}}>
        <Text style={styles.text}>
          If you delete your account all your account setting will be removed
          and some of our promotional offers will not reach you.However ,you
          have 30 days to recover your account
        </Text>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: '900'}}>
            Delete Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://fast-grocer-client.vercel.app/privacy-policy',
            )
          }
          style={{marginTop: 18}}>
          <Text
            style={{
              color: '#91BC66',
              fontWeight: '500',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#91BC66',
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

export default DeleteAccount;
