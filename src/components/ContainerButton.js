import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export const ContainerButton = ({ action = () => {}, name, iconName }) => {
  const onPressHandler = () => {
    action()
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  return (
    <TouchableOpacity style={styles.mainContainer} activeOpacity={0.6} onPress={onPressHandler}>
      <View style={styles.container}>
        <Text style={styles.header}>{name}</Text>
        <Ionicons
            name={iconName}
            color="rgba(255, 255, 255, 1)"
            size={36}
          />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    justifyContent: "center",
    height: 60
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    color: "#fff",
  },
});
