import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';

// state management
import {Provider} from 'react-redux';
import store from './app/redux/store';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';

import storage from './app/redux/storage';
import SplashScreen from './app/screens/SplashScreen';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getUser();
  }, []);

  console.log('user :>> ', user);

  const getUser = async () => {
    setIsLoading(true);
    setIsReady(false);
    const data = await storage.getUser();
    if (data) setUser(data);
    setIsReady(true);
    setIsLoading(false);
  };

  if (isloading) {
    return <SplashScreen />;
  }
  if (isReady)
    return (
      <Provider store={store}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Provider>
    );
}
