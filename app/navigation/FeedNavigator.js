import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

// Screens
import HomeScreen from '../screens/HomeScreen';
import DetailsPage from '../screens/feed/DetailsPage';
import CandidatesScreen from '../screens/feed/CandidatesScreen';
import CandidateProfileScreen from '../screens/feed/CandidateProfileScreen';

const {Navigator, Screen} = createStackNavigator();

const FeedNavigator = () => (
  <Navigator
    mode="modal"
    initialRouteName="HomeScreen"
    screenOptions={{headerShown: false}}>
    <Screen name="HomeScreen" component={HomeScreen} />

    <Screen
      name="Election Info"
      component={DetailsPage}
      options={{headerShown: true}}
    />

    <Screen
      name="Candidates"
      component={CandidatesScreen}
      options={{headerShown: false}}
    />
    <Screen
      name="CandidateProfile"
      component={CandidateProfileScreen}
      options={{headerShown: false}}
    />
  </Navigator>
);

export default FeedNavigator;
