import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as Yup from 'yup';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import ErrorMessage from '../../components/forms/ErrorMessage';
import SubmitButton from '../../components/forms/SumbitButton';
import {vote} from '../../redux/actions/voterActions';

const validationSchema = Yup.object().shape({
  nin: Yup.string().required().label('National Identification Number'),
  votersId: Yup.string().required().label('Voters Id'),
});

const SteponeScreen = ({navigation, route}) => {
  const voterOptions = route.params;
  console.log('voterOptions :>> ', voterOptions);
  const {poll: poll_Id, _id: id} = voterOptions;

  const dispatch = useDispatch();
  const {loading, error, data, success} = useSelector(
    (state) => state.postVote,
  );

  console.log(
    'loading, error, data, success :>> ',
    loading,
    error,
    data,
    success,
  );
  const voteHandler = ({nin, votersId}) => {
    dispatch(vote(poll_Id, nin, votersId, id));
    if (success) return navigation.push('StepTwo', poll_Id);
  };

  console.log('data :>> ', data);
  console.log('error :>> ', error);

  return (
    <View style={styles.screen}>
      {success && (
        <Text
          style={{
            color: 'purple',
            fontFamily: 'Roboto',
            fontSize: 15,
            fontWeight: '900',
          }}>
          {/* 5657649854147673 */}
          Successfully voted
        </Text>
      )}
      <AppForm
        initialValues={{
          nin: '',
          votersId: '',
        }}
        validationSchema={validationSchema}
        onSubmit={voteHandler}>
        <ErrorMessage error={error} visible={error} />
        <AppFormField
          name="nin"
          placeholder="NIN"
          width="70%"
          keyboardType="number-pad"
        />

        <AppFormField
          name="votersId"
          placeholder="Voters Id"
          width="70%"
          keyboardType="number-pad"
        />

        <SubmitButton title="Proceed" loading={loading} />
      </AppForm>
    </View>
  );
};

export default SteponeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
