import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CandidateCard = ({party, description, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'column', flexShrink: 1}}>
          <Text style={{fontSize: 17, color: 'grey', fontWeight: 'bold'}}>
            Party : {party}
          </Text>
          <View>
            <Image
              source={require('../assets/candidate.png')}
              style={{
                width: 100,
                height: 70,
                alignSelf: 'flex-end',
                margin: 20,
              }}
            />
          </View>
          <Text style={{fontWeight: 'bold', fontSize: 19}}>{name}</Text>
          <Text
            numberOfLines={2}
            style={{
              flexWrap: 'wrap',
              textAlign: 'justify',
              fontStyle: 'italic',
            }}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CandidateCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '45%',
    height: 270,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
  },
});
