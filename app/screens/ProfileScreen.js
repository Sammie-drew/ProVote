import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import FingerprintScanner from 'react-native-fingerprint-scanner';

import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails, logOut} from '../redux/actions/userActions';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Footer from '../components/Footer';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, loading} = useSelector((state) => state.userDetails);

  const {token} = useSelector((state) => state.loginUser);

  useEffect(() => {
    dispatch(getUserDetails());
  }, [token, dispatch]);

  const logOutHandler = () => {
    dispatch(logOut());
  };

  const buttonHandler = async () => {
    try {
      FingerprintScanner.release();

      const result = await FingerprintScanner.authenticate({
        title: 'Vote',
        cancelButton: 'Cancel',
        description:
          'Put your fingerprint to before you are allowed to view this credential',
        fallbackEnabled: true,
        onAttempt: (err) => console.log(err),
      });
      if (result) return navigation.navigate('ProfileList', user);
      console.log('result', result);
      FingerprintScanner.release();
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#00AC69" />
    </View>
  ) : (
    <View style={styles.screen}>
      <View style={styles.circle}>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              fontStyle: 'italic',
              color: 'grey',
            }}>
            Welcome to the future : {user.lastName}
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/candidate.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.info}>View Information</Text>
        <TouchableOpacity onPress={buttonHandler}>
          <EvilIcons name="chevron-right" size={35} color="#00AC69" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.card} onPress={logOutHandler}>
        <Text style={styles.info}>LOG OUT</Text>
      </TouchableOpacity>
      <Footer />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    height: 200,
    width: 200,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#00AC69',
  },
  circle: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    elevation: 5,
    // borderWidth: 2,
    // borderTopWidth: 0,
    // borderColor: '#00AC69',
  },
  details: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  info: {
    color: '#00AC69',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
