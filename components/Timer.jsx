import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const today = new Date();
    const endOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59,
      999,
    );
    const remainingTime = endOfDay - today;
    const remainingTimeInSeconds = remainingTime / 1000;
    const remainingTimeInMinutes = remainingTimeInSeconds / 60;
    const remainingTimeInHours = remainingTimeInMinutes / 60;
    const hours = Math.floor(remainingTimeInHours);
    const minutes = Math.floor(remainingTimeInMinutes % 60);
    const seconds = Math.floor(remainingTimeInSeconds % 60);
    setCountdown({hours, minutes, seconds});
    const interval = setInterval(() => {
      setCountdown(countdown => {
        if (countdown.seconds > 0) {
          return {
            ...countdown,
            seconds: countdown.seconds - 1,
          };
        } else if (countdown.minutes > 0) {
          return {
            ...countdown,
            seconds: 59,
            minutes: countdown.minutes - 1,
          };
        } else if (countdown?.hours > 0) {
          return {
            ...countdown,
            seconds: 59,
            minutes: 59,
            hours: countdown?.hours - 1,
          };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 4,
        width: 100,
        height: 26,
        borderRadius: 7,
      }}>
      <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
        {countdown.hours}
        <Text style={styles.borno}>H</Text>:{countdown.minutes}
        <Text style={styles.borno}>M</Text>:{countdown.seconds}
        <Text style={styles.borno}>S</Text>
      </Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  borno: {
    fontSize: 11,
    fontWeight: '500',
  },
});
