import React from "react";
import { StyleSheet, Text, View } from "react-native";

const VoteSteps = ({ step1, step2, step3 }) => {
  return (
    <View style={styles.levels}>
      {step1 ? (
        <View style={{ backgroundColor: "green" }} />
      ) : (
        <View style={{ backgroundColor: "yellow", width: "30%" }} />
      )}
      <View></View>
    </View>
  );
};

export default VoteSteps;

const styles = StyleSheet.create({
  levels: {
    borderWidth: 2,
    borderColor: "pink",
  },
});
