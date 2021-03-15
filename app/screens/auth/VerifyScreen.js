import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as Yup from 'yup';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import Footer from '../../components/Footer';
import SubmitButton from '../../components/forms/SumbitButton';
import {useDispatch, useSelector} from 'react-redux';
import {verifyNin} from '../../redux/actions/userActions';
import ErrorMessage from '../../components/forms/ErrorMessage';

const validationSchema = Yup.object().shape({
  nin: Yup.string().required().label('National Identification Number'),
});

const VerifyScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {userNininfo, loading, error, success} = useSelector(
    (state) => state.ninDetails,
  );

  const submitHandler = ({nin}) => {
    dispatch(verifyNin(nin));

    if (success) navigation.navigate('Register', userNininfo);
  };
  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="purple" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            nin: '',
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}>
          <KeyboardAvoidingView
            behavior="position"
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ErrorMessage error={error} visible={error} />
            <AppFormField
              name="nin"
              placeholder="NIN"
              width="100%"
              keyboardType="number-pad"
            />
          </KeyboardAvoidingView>

          <SubmitButton title="VERIFY" loading={loading} />
        </AppForm>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
  },
});
