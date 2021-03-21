import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as Yup from 'yup';
import FingerprintScanner from 'react-native-fingerprint-scanner';

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

  const {poll: poll_Id, _id: id} = voterOptions;

  const dispatch = useDispatch();
  const {loading, error, success} = useSelector((state) => state.postVote);

  const voteHandler = async ({nin, votersId}) => {
    FingerprintScanner.authenticate({
      title: 'ProVote',
      cancelButton: 'Cancel',
      description: 'Put your fingerprint before you are allowed to vote',
      subTitle: 'Advanced Voting System',
    }).then((result) => result && console.log(`I am working`));

    console.log(`it works here`);
    dispatch(vote(poll_Id, nin, votersId, id));

    success &&
      Alert.alert(
        'Provote Voting Scheme',
        'You have successfully casted your vote',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: () => navigation.navigate('Vote'),
          },
        ],
      );
  };

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
