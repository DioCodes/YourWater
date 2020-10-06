import React, { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

export const AchievmentsScreen = ({ navigation }) => {
  return <View style={styles.main}></View>;
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 60 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
