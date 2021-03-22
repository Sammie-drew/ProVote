import React, {useEffect} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {BarChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';

import CandidateCard from '../../components/CandidateCard';
import {fetchPollOptions} from '../../redux/actions/pollActions';

const CandidateList = ({navigation, route}) => {
  const polls = route.params;

  const dispatch = useDispatch();

  const options = useSelector((state) => state.getPollOptions);

  const {loading, pollOptions} = options;

  useEffect(() => {
    dispatch(fetchPollOptions(polls._id));
  }, [dispatch]);

  const data = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  data.labels.push(...pollOptions.map((option) => option.value));
  data.datasets[0].data.push(
    ...pollOptions.map((option) => option.votes.length),
  );

  const chartConfig = {
    backgroundColor: 'lightgreen',
    backgroundGradientFrom: '#00AC69',
    backgroundGradientTo: '#00AC69',
    decimalPlaces: 1, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 20,
    },
    // propsForDots: {
    //   r: '6',
    //   strokeWidth: '10',
    //   stroke: '#ffa726',
    // },
  };
  return loading ? (
    <ActivityIndicator
      size="large"
      color="#00AC69"
      style={{flex: 1, alignSelf: 'center'}}
    />
  ) : (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={polls.pollOptions}
        numColumns={2}
        style={{backgroundColor: '#fff'}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CandidateCard
            name={item.value}
            party={item.party}
            description={item.about}
            onPress={() => {
              Alert.alert(
                'Ready to VOTE',
                'Are you sure that you want to vote for this candidate ? , You only vote once and there is no going back',
                [
                  {
                    text: 'Cancel',
                    style: 'destructive',
                  },
                  {
                    text: 'Yes',
                    style: 'default',
                    onPress: () => navigation.push('StepOne', item),
                  },
                ],
              );
            }}
          />
        )}
        ListFooterComponent={() => (
          <BarChart
            data={data}
            width={Dimensions.get('screen').width - 20}
            height={270}
            chartConfig={chartConfig}
            verticalLabelRotation={5}
            style={{marginRight: 10}}
            fromZero={true}
          />
        )}
      />
    </View>
  );
};

export default CandidateList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
