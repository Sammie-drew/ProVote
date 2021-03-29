import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';

import Footer from '../../components/Footer';

// Forms
import AppForm from '../../components/forms/AppForm';
import AppFormField from '../../components/forms/AppFormField';
import ErrorMessage from '../../components/forms/ErrorMessage';
import SubmitButton from '../../components/forms/SumbitButton';
import {register} from '../../redux/actions/userActions';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label('First Name'),
  lastName: Yup.string().required().label('Last Name'),
  middleName: Yup.string().required().label('Middle Name'),
  state: Yup.string().required().label('State'),
  phoneNumber: Yup.number().required().label('Phone Number'),
  password: Yup.string().required().min(5).label('Password'),
  nin: Yup.number().required().label('National Identification Number'),
  dob: Yup.string().required().label('Date Of Birth'),
});

const RegistertScreen = ({route, navigation}) => {
  const {currentUser} = route.params;

  function getAge(dateString) {
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const ageOfUser = getAge(currentUser.dob);

  const dispatch = useDispatch();
  const {loading, error, success} = useSelector((state) => state.registerUser);

  const submitHandler = ({
    firstName,
    lastName,
    middleName,
    state,
    phoneNumber,
    password,
    nin,
    dob,
  }) => {
    dispatch(
      register(
        firstName,
        lastName,
        middleName,
        currentUser.state._id,
        phoneNumber,
        password,
        nin,
        dob,
      ),
    );

    success && navigation.navigate('Login');
  };

  return ageOfUser < 18 ? (
    <View style={styles.notEligibleMessage}>
      <Text style={styles.notEligibleMessageText}>
        User not eligible to vote because User is too young to vote. USER MUST
        BE 18 AND ABOVE
      </Text>
      <Text style={styles.notEligibleMessageText}>
        User Current Age :{ageOfUser}
      </Text>
    </View>
  ) : (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sign Up to Pro Vote</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppForm
          initialValues={{
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            middleName: currentUser.middleName,
            state: currentUser.state._id,
            phoneNumber: currentUser.phoneNumber,
            password: '',
            nin: currentUser.nin,
            dob: currentUser.dob,
          }}
          validationSchema={validationSchema}
          onSubmit={submitHandler}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              margin: 10,
            }}>
            <ErrorMessage error={error} visible={error} />
            <AppFormField
              name="firstName"
              placeholder="First name "
              width="45%"
              value={currentUser.firstName}
            />
            <AppFormField
              name="lastName"
              placeholder="Last name "
              width="45%"
              value={currentUser.lastName}
            />

            <AppFormField
              name="middleName"
              placeholder="Middle name "
              width="45%"
              value={currentUser.middleName}
            />

            <AppFormField
              name="state"
              placeholder="State of origin"
              width="45%"
              value={currentUser.state.state}
            />

            <AppFormField
              name="phoneNumber"
              placeholder="Phone Number"
              width="45%"
              keyboardType="number-pad"
              value={currentUser.phoneNumber.toString()}
            />

            <AppFormField
              name="nin"
              placeholder="NIN"
              width="70%"
              keyboardType="number-pad"
              value={currentUser.nin.toString()}
            />

            <AppFormField
              name="dob"
              placeholder="DOB"
              width="70%"
              keyboardType="number-pad"
              value={currentUser.dob}
            />

            <AppFormField
              name="password"
              placeholder="Password"
              width="70%"
              secureTextEntry={true}
            />
          </View>

          <SubmitButton title="Register" loading={loading} />
        </AppForm>
        <Footer />
      </ScrollView>
    </>
  );
};

export default RegistertScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingBottom: 20,
    margin: 30,
    elevation: 3,
  },
  headerText: {
    fontSize: 20,
    marginTop: 10,
  },
  notEligibleMessage: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  notEligibleMessageText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
