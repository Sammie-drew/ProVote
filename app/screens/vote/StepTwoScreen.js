import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import AppButton from '../../components/AppButton';
import {count} from '../../redux/actions/voterActions';

const StepTwoScreen = ({navigation, route}) => {
  const poll_Id = route.params;
  console.log('poll_id :>> ', poll_Id);

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.putVote);
  const {loading, error, success} = counter;

  const handleVote = () => {
    dispatch(count(poll_Id));
    success &&
      Alert.alert('Vote Successful', 'You have succesfully casted your vote');
    if (success) return navigation.navigate('Vote');
  };
  return (
    <View style={styles.screen}>
      <AppButton title="VOTE" onPress={handleVote} loading={loading} />
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
