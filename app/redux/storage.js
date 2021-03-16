import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await AsyncStorage.setItem(key, authToken, (error) =>
      console.log(`can't store this token for ${error} reasons `),
    );
  } catch (error) {
    console.log('error storing the token :>> ', error);
  }
};

const getToken = async () => {
  try {
    return await AsyncStorage.getItem(key, (error) =>
      console.log(`can't get token for ${error} reasons`),
    );
  } catch (error) {
    console.log('error getting the token :>> ', error);
  }
  console.log('done');
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(key, (error) =>
      console.log(`Can't delete token for ${error} reasons`),
    );
  } catch (error) {
    console.log('error removing the token :>> ', error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  storeToken,
};

// 23348124759238890
