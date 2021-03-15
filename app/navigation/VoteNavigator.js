import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Screens
import VoteScreen from '../screens/vote/VoteScreen';
import CandidateList from '../screens/vote/CandidateList';
import SteponeScreen from '../screens/vote/SteponeScreen';
import StepTwoScreen from '../screens/vote/StepTwoScreen';

const {Navigator, Screen} = createStackNavigator();

export default VoteNavigator = () => (
  <Navigator>
    <Screen name="Vote" component={VoteScreen} options={{headerShown: false}} />

    <Screen
      name="CandidateList"
      component={CandidateList}
      options={{headerShown: false}}
    />

    <Screen
      name="StepOne"
      component={SteponeScreen}
      options={{headerShown: false}}
    />

    <Screen
      name="StepTwo"
      component={StepTwoScreen}
      options={{headerShown: false}}
    />
  </Navigator>
);
