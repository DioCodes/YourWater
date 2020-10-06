import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export const DrinkWaterNavButton = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
      >
        <View style={styles.button}>
          <Ionicons name="ios-water" size={40} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "black",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 80 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
