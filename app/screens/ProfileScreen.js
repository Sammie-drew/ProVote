import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getUserDetails, logOut} from '../redux/actions/userActions';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Footer from '../components/Footer';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector((state) => state.userDetails);

  console.log('error :>> ', error);
  console.log('user :>> ', user);

  useEffect(() => {
    if (user) dispatch(getUserDetails());
  }, [dispatch]);

  const logOutHandler = () => {
    dispatch(logOut());
    navigation.navigate('Feed');
  };

  return (
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
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfileList', user)}>
          <EvilIcons name="chevron-right" size={35} color="purple" />
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
  },
  details: {
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  info: {
    color: 'purple',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
