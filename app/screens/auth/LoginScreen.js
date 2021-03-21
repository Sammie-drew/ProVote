import React, {useEffect} from 'react';
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

const validationSchema = Yup.object().shape({
  nin: Yup.string().required().label('National Identification Number'),
  password: Yup.string().required().min(5).label('Password'),
});

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {loading, error} = useSelector((state) => state.loginUser);

  const submitHandler = ({nin, password}) => {
    dispatch(login(nin, password));
  };

  return (
    <View style={styles.header}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
        <View style={{flexDirection: 'row', margin: 10}}>
          <Text>Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.push('Verify')}>
            <Text style={{color: 'purple'}}>Register with ProVote</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
  },
});
