import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import defaultStyles from '../config/styles';

function AppTextInput({width = '100%', ...otherProps}) {
  return (
    <View style={[styles.container, {width}]}>
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        placeholder="..."
        style={[defaultStyles.text, {width: '100%', height: '90%'}]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'purple',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
