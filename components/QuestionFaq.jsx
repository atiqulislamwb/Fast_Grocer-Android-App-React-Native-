import {
  StyleSheet,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  View,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Questions = ({question, answer}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (
    <View
      style={{
        borderColor: '#E2E8F0',
        borderBottomWidth: 1,
        paddingTop: 3,
        padding: 9,
      }}>
      <TouchableOpacity
        onPress={toggleExpanded}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 14, color: '#000', width: '90%'}}>
          {question}
        </Text>
        {expanded ? (
          <MaterialIcons name="keyboard-arrow-up" size={28} color="black" />
        ) : (
          <MaterialIcons name="keyboard-arrow-down" size={28} color="black" />
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={{padding: 3}}>
          <Text style={{fontSize: 12}}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
