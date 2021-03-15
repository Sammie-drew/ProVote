import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ElectionCard = ({onPress, candidateNo, title, details}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.headerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text numberOfLines={6}>{details}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontFamily: 'Roboto', fontSize: 18, fontWeight: 'bold'}}>
          {candidateNo} Candidates
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ElectionCard;

const styles = StyleSheet.create({
  card: {
    width: '45%',
    height: 270,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    margin: 10,
    elevation: 7,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
  },
  headerTitle: {
    alignItems: 'center',
  },
});
