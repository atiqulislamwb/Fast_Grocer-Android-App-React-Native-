import {
  Button,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CouponCode = () => {
  const [showInput, setShowInput] = useState(false);
  const onPress = () => {
    if (Platform.OS === 'android') {
      LayoutAnimation.configureNext({
        update: {
          type: LayoutAnimation.Types.easeInEaseOut,
          duration: 400,
        },
      });
    } else {
      LayoutAnimation.configureNext({
        duration: 400,
        update: {
          type: LayoutAnimation.Types.spring,
          springDamping: 0.4,
        },
      });
    }
    setShowInput(!showInput);
  };
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          margin: 6,
        }}>
        {showInput ? (
          <MaterialIcons name="keyboard-arrow-up" color="#6BA22C" size={25} />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" color="#6BA22C" size={25} />
        )}
        <Text style={{fontSize: 12, color: '#475569'}}>
          Have a Special Code?
        </Text>
      </TouchableOpacity>
      {showInput && (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            margin: 4,
          }}>
          <TextInput
            placeholder="Enter Special Code"
            type="text"
            style={{
              borderWidth: 1,
              borderColor: '#CAD4E0',
              width: '77%',
              padding: 8,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#8B5CF6',
              paddingVertical: 13,
              paddingHorizontal: 20,
              marginLeft: 5,
              borderRadius: 5,
            }}>
            <Text style={{fontSize: 15, fontWeight: '700', color: '#fff'}}>
              Apply
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CouponCode;

const styles = StyleSheet.create({});
