import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';

import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import Footer from '../../components/Footer';
import SubmitButton from '../../components/forms/SumbitButton';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/actions/userActions';
import ErrorMessage from '../../components/forms/ErrorMessage';
import storage from '../../redux/storage';

const validationSchema = Yup.object().shape({
  nin: Yup.string().required().label('National Identification Number'),
  password: Yup.string().required().min(5).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, success, token, error} = useSelector(
    (state) => state.loginUser,
  );
  console.log('token :>> ', token);

  const submitHandler = ({nin, password}) => {
    dispatch(login(nin, password));
  };

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="purple" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            nin: '',
            password: '',
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

            <AppFormField
              name="password"
              placeholder="Password"
              width="100%"
              secureTextEntry={true}
            />
          </KeyboardAvoidingView>

          <SubmitButton title="Login" loading={loading} />
        </AppForm>
        <View style={{flexDirection: 'row', margin: 20}}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Verify')}>
            <Text style={{color: 'purple'}}>Register with ProVote</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default LoginScreen;

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
