import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

// state management
import {Provider} from 'react-redux';
import RootStackNavigator from './app/navigation/RootStackNavigator';
import store from './app/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
