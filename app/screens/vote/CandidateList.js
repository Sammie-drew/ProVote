import React, {useEffect} from 'react';
import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';

import CandidateCard from '../../components/CandidateCard';

const CandidateList = ({navigation, route}) => {
  const polls = route.params;

  console.log('polls :>> ', polls.pollOptions);

  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => item._id}
        data={polls.pollOptions}
        numColumns={2}
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
                    onPress: () => navigation.navigate('StepOne', item),
                  },
                ],
              );
            }}
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
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});
