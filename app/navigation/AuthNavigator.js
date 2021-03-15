import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import VerifyScreen from '../screens/auth/VerifyScreen';

const {Navigator, Screen} = createStackNavigator();

const AuthNavigator = () => (
  <Navigator>
    <Screen
      name="Login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Screen name="Verify" component={VerifyScreen} />
    <Screen name="Register" component={RegisterScreen} />
  </Navigator>
);

export default AuthNavigator;
