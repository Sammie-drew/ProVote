import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const InfoList = ({details}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.details}>{details}</Text>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: '#efe',
    margin: 10,
    elevation: 4,
  },
  details: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 17,
  },
});
