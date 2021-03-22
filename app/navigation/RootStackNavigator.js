import React, {useEffect, useState} from 'react';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

import storage from '../redux/storage';
import SplashScreen from '../screens/SplashScreen';
import {useSelector} from 'react-redux';

const RootStackNavigator = () => {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  const {token} = useSelector((state) => state.loginUser);

  useEffect(() => {
    getUser();
  }, [token]);

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
  if (isReady) return user ? <AppNavigator /> : <AuthNavigator />;
};

export default RootStackNavigator;
