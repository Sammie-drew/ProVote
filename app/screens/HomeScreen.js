import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useSelector, useDispatch} from 'react-redux';

import Footer from '../components/Footer';
import {fetchCategory} from '../redux/actions/categoryActions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.category);
  const {category} = categoryList;

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch, fetchCategory]);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <View style={styles.card}>
        <Text style={styles.title}>ELECTION INFORMATION</Text>
        <Text style={styles.desc}>
          The elections in Provote are divided into {category.length} Forms.
        </Text>

        {/* refactor !!! */}

        {category.map((cate) => (
          <Text style={styles.info} key={cate._id}>
            <Text>{'\u2B24'} </Text>
            {cate.alias}: {cate.name}
          </Text>
        ))}

        <View style={styles.circle}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Election Info')}>
            <Ionicons name="ios-arrow-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#00AC69',
    padding: 20,
    justifyContent: 'space-between',
  },
  info: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    textTransform: 'capitalize',
    padding: 1,
  },
  circle: {
    backgroundColor: '#00AC69',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  title: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
