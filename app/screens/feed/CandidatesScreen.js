import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import CandidateCard from '../../components/CandidateCard';
import Footer from '../../components/Footer';
import {fetchCandidates} from '../../redux/actions/pollActions';

const CandidatesScreen = ({navigation, route}) => {
  const category = route.params;

  const dispatch = useDispatch();

  const candidateList = useSelector((state) => state.candidates);
  const {candidates, loading} = candidateList;

  useEffect(() => {
    dispatch(fetchCandidates(category._id));
  }, [dispatch, fetchCandidates]);

  return loading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#00AC69" />
    </View>
  ) : (
    <FlatList
      data={candidates}
      keyExtractor={(item) => item._id}
      numColumns={2}
      style={{backgroundColor: '#fff'}}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <CandidateCard
          name={item.value}
          party={item.party}
          description={item.about}
          onPress={() => navigation.navigate('CandidateProfile', item)}
        />
      )}
      ListHeaderComponent={() => (
        <View style={styles.topic}>
          <TouchableOpacity
            style={{position: 'absolute', left: 30, zIndex: 1}}
            onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={24} color="#00AC69" />
          </TouchableOpacity>
          <Text style={styles.topicText}>CANDIDATES</Text>
        </View>
      )}
      ListFooterComponent={() => <Footer />}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  topic: {
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    height: 50,
    borderWidth: 2,
    borderColor: '#00AC69',
  },
  topicText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#00AC69',
  },
});

export default CandidatesScreen;
