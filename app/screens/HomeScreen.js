import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import Footer from '../components/Footer';
import {fetchCategory} from '../redux/actions/categoryActions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.category);
  const {loading, error, category} = categoryList;

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch, fetchCategory]);

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="purple" />

      <Image style={styles.image} source={require('../assets/logo.png')} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Election Info')}
        style={styles.card}>
        <Text style={styles.title}>Election Info</Text>
        <Text style={styles.desc}>
          The elections in Provote are divided into {category.length} Forms.
        </Text>

        {/* refactor !!! */}

        {category.map((cate) => (
          <Text style={styles.info} key={cate._id}>
            {'\u2B24'} {cate.alias}: {cate.name}
          </Text>
        ))}
      </TouchableOpacity>
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
  },
  card: {
    height: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  info: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '600',
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 30,
  },
  title: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  desc: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
