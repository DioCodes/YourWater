import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export const ResetWaterLevelButton = ({onPressAction}) => {
  const onPressHandler = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPressAction();
  }
  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPressHandler}
      >
        <View style={styles.button}>
          <Ionicons name="ios-refresh" size={20} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, .75)",
    borderColor: "transparent",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
