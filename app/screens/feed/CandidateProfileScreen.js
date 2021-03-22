import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../../components/Footer';

const CandidateProfileScreen = ({navigation, route}) => {
  const details = route.params;
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 20, zIndex: 1}}
        onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={24} color="#00AC69" />
      </TouchableOpacity>

      <View style={{borderBottomWidth: 2, borderColor: '#00AC69'}}>
        <Image
          source={require('../../assets/candidate.png')}
          style={styles.image}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.topic}>
          <Text style={styles.topicText}>{details.value}</Text>
        </View>
        <View style={styles.topic}>
          <Text style={styles.topicText}>{details.party}</Text>
        </View>
      </View>
      <View style={styles.topic}>
        <Text style={styles.topicText}>Biography</Text>
      </View>
      <ScrollView style={styles.textBox} showsVerticalScrollIndicator={false}>
        <Text style={styles.textDets}>{details.about}</Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default CandidateProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'flex-end',
  },
  topic: {
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 6,
    margin: 10,
    borderWidth: 2,
    borderColor: '#00AC69',
  },
  topicText: {
    fontSize: 17,
  },
  textBox: {
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: '#00AC69',
  },
  textDets: {
    textAlign: 'justify',
    paddingBottom: 10,
  },
});
