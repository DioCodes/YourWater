import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from "expo-haptics";

export const DrinkWaterButton = ({onPressAction}) => {
  const onPressHandler = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    onPressAction();
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressHandler}
      >
        <View style={styles.button}>
          <Ionicons name="ios-water" size={40} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 80 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
