import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'center',
    width: 500,
    height: 500,
  },
});
