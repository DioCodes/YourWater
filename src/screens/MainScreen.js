import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { DrinkWaterNavButton } from "../components/DrinkWaterNavButton";

export const MainScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.goalContainer}>
        <Text style={styles.text}>Drinked Water: 300 ml</Text>  
        <Text style={styles.text}>Goal: 2700 ml</Text>  
      </View>

      <View style={styles.water}>
        <DrinkWaterNavButton />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  water: {
    position: 'absolute',
    bottom: 10
  },
  goalContainer: {
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 22
  }
});
