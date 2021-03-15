import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPolls} from '../../redux/actions/pollActions';

const VoteScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pollList = useSelector((state) => state.getPolls);
  const {loading, error, polls} = pollList;

  console.log('polls :>> ', polls.isElectionValid);
  useEffect(() => {
    dispatch(fetchPolls());
  }, [dispatch, fetchPolls]);
  return (
    <View style={styles.screen}>
      <View style={styles.miniCard}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Available vote for the day
        </Text>
      </View>
      <TouchableOpacity
        disabled={!polls.isElectionValid}
        style={styles.card}
        onPress={() => navigation.navigate('CandidateList', polls)}>
        <Text style={styles.notice}>{polls.title}</Text>
        <Ionicons name="md-finger-print" size={70} color="purple" />
        <Text style={{fontSize: 17, color: 'green', fontWeight: 'bold'}}>
          Status: {polls.isElectionValid ? 'Valid' : 'Outdated'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VoteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  card: {
    height: 200,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  notice: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  miniCard: {
    padding: 10,
    backgroundColor: '#fff',
    width: 200,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
});
