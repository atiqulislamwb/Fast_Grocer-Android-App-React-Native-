import React, {useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const ProgressBar = ({progress}) => {
  const progressAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [progress]);

  const interpolated = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const spin = {transform: [{rotate: interpolated}]};

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.progressBar, spin]} />
    </View>
  );
};

const Career = () => {
  const [progress, setProgress] = React.useState(0);
  const [timer, setTimer] = React.useState(null);

  const handlePressIn = () => {
    setTimer(
      setTimeout(() => {
        setProgress(1);
      }, 500),
    );
  };

  const handlePressOut = () => {
    clearTimeout(timer);
    setTimer(null);
    setProgress(0);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button}>
        <ProgressBar progress={progress} />
      </TouchableOpacity>
    </View>
  );
};

export default Career;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#555',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    position: 'absolute',
  },
});
