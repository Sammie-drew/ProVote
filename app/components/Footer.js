import React from 'react';
import {Text, View} from 'react-native';

const Footer = () => {
  return (
    <View
      style={[
        {
          marginBottom: 10,
          alignSelf: 'center',
        },
      ]}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', color: '#00AC69'}}>&#xa9;</Text>
        <Text style={{color: '#00AC69', fontWeight: 'bold'}}> ProVote</Text>
      </View>
    </View>
  );
};

export default Footer;
