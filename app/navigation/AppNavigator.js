import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Other Navigators
import FeedNavigator from './FeedNavigator';
import VoteNavigator from './VoteNavigator';
import ProfileNavigator from './ProfileNavigator';

const {Navigator, Screen} = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Navigator
      tabBarOptions={{
        activeTintColor: 'purple',
        inactiveTintColor: 'black',
        keyboardHidesTabBar: true,
      }}>
      <Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="ballot-recount"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Vote"
        component={VoteNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-finger-print" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="expeditedssl" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppNavigator;
