import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const PersonalInformation = () => {
  const {userFromDb} = useAuth();

  return (
    <View>
      <Text>PersonalInformation</Text>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({});
