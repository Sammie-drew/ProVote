import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';

const AppButton = ({loading, onPress, title}) => {
  return (
    <View>
      {loading ? (
        <ActivityIndicator color="#00AC69" size="large" />
      ) : (
        <TouchableOpacity
          style={{
            width: '50%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.secondary,
            borderRadius: 40,
            alignSelf: 'center',
            padding: 10,
            elevation: 10,
          }}
          onPress={onPress}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            {title}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
