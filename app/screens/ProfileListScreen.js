import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import InfoList from '../components/InfoList';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const ProfileListScreen = ({navigation, route}) => {
  const user = route.params;
  const [visible, setVisible] = useState(true);
  const [icon, setIcon] = useState('eye-with-line');

  const toggleVisibility = () => {
    setVisible(!visible);
    if (visible) {
      setIcon('eye');
    } else {
      setIcon('eye-with-line');
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <TouchableOpacity
          style={{marginRight: 20}}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.cardText}>Credentials</Text>
      </View>
      <ScrollView>
        <Text>FistName</Text>
        <InfoList details={user.firstName} />
        <Text>LastName</Text>

        <InfoList details={user.lastName} />
        <Text>MiddleName</Text>

        <InfoList details={user.middleName} />
        <Text>Phone Number</Text>

        <InfoList details={user.phoneNumber} />
        <Text>State</Text>

        <InfoList details={user.state.state} />
        <Text>NIN</Text>

        <InfoList details={user.nin} />
        <Text>Date of Birth</Text>

        <InfoList details={user.dob} />
        <Text>VoterID</Text>

        <TouchableOpacity
          style={{alignSelf: 'center', margin: 10}}
          onPress={() => toggleVisibility()}>
          <Entypo name={icon} size={20} color="purple" />
        </TouchableOpacity>
        {visible ? (
          <Text style={styles.secret}> * * * * * * * * * * </Text>
        ) : (
          <InfoList details={user.voterId} />
        )}
      </ScrollView>
    </View>
  );
};

export default ProfileListScreen;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
    elevation: 8,
    flexDirection: 'row',
  },
  cardText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20,
  },
  secret: {
    padding: 20,
    backgroundColor: '#efe',
    margin: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
