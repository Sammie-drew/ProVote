import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextField = ({ text }) => {
  return (
    <View style={styles.textfield}>
      <Text style={styles.field}>{text}</Text>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textfield: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
    margin: 10,
  },
  field: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "blue",
  },
});
