import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const years = ['2018', '2019', '2020', '2021', '2022', '2023'];

const Months = () => {
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedYear, setSelectedYear] = useState('2023');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 5,
      }}>
      <View style={styles.wrapper}>
        <Picker
          selectedValue={selectedMonth}
          style={{height: 30, width: 100, textAlign: 'center'}}
          onValueChange={itemValue => setSelectedMonth(itemValue)}>
          {months.map(month => (
            <Picker.Item
              key={month}
              style={styles.text}
              label={month}
              value={month}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.wrapper}>
        <Picker
          selectedValue={selectedYear}
          style={{
            height: 20,
            width: 110,
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#E5E7EB',
          }}
          onValueChange={itemValue => setSelectedYear(itemValue)}>
          {years.map(year => (
            <Picker.Item
              key={year}
              style={styles.text}
              label={year}
              value={year}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default Months;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
  wrapper: {
    backgroundColor: '#ECFCCB',
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
