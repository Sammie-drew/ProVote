import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
  const postVote = useSelector((state) => state.postVote);

  const {loading, error, data, success} = postVote;

  const voteHandler = ({nin, votersId}) => {
    dispatch(vote(poll_Id, nin, votersId, id));

    success && navigation.navigate('StepTwoScreen');
  };

  console.log('data :>> ', data);
  console.log('error :>> ', error);

  return (
    <View style={styles.screen}>
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
