import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Screens
import ProfileScreen from '../screens/ProfileScreen';
import ProfileListScreen from '../screens/ProfileListScreen';

const {Navigator, Screen} = createStackNavigator();

export default VoteNavigator = () => (
  <Navigator>
    <Screen
      name="Profile"
      component={ProfileScreen}
      options={{headerShown: false}}
    />
    <Screen
      name="ProfileList"
      component={ProfileListScreen}
      options={{headerShown: false}}
    />
  </Navigator>
);
