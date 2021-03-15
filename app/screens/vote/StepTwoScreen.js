import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import AppButton from '../../components/AppButton';

const StepTwoScreen = ({navigation}) => {
  const handleVote = () => {
    Alert.alert('Vote Successfull', 'You have succesfully casted your vote');
    navigation.navigate('Vote');
  };
  return (
    <View style={styles.screen}>
      <AppButton title="VOTE" onPress={handleVote} />
    </View>
  );
};

export default StepTwoScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
