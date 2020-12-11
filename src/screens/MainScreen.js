import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import AsyncStorage from "@react-native-community/async-storage";

import { DrinkWaterButton } from "../components/DrinkWaterButton";
import { ResetWaterLevelButton } from "../components/ResetWaterLevelButton";
import { drinkWater, resetWater } from "../store/actions/waterActions";

export const MainScreen = () => {
  const waterLevel = useSelector((state) => state.water.waterLevel);
  const dispatch = useDispatch();
  const progressBar = useRef(null);

  const goalWaterLevel = 2000;
  const goalCups = goalWaterLevel / 250; //250 - one cup

  const drinkedWaterWithBlock =
    waterLevel > goalWaterLevel ? goalWaterLevel : waterLevel;
  const progressLevel = (
    (drinkedWaterWithBlock / goalWaterLevel) *
    100
  ).toFixed();
  const drinkedCups = drinkedWaterWithBlock / 250;

  // update progress on the next day
  const today = new Date();
  const tomorrow = new Date();

  const updateProgressDate = async (date) => {
    try {
      await AsyncStorage.setItem("@UpdateProgressDate:key", date);
    } catch (err) {
      console.log(err);
    }
  };

  const checkProgressDate = async () => {
    const value = await AsyncStorage.getItem("@UpdateProgressDate:key");
    try {
      if (value === today.toLocaleDateString() || value === null) {
        console.log("reset")
        dispatch(resetWater());
        tomorrow.setDate(new Date().getDate() + 1);
        updateProgressDate(tomorrow.toLocaleDateString());
      } else {
        console.log(today.toLocaleDateString(), value)
      }
    } catch (err) {
      console.log(err);
    }
  };
  ////

  useEffect(() => {
    checkProgressDate();
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.goalContainer}>
        <View
          style={{
            ...styles.container,
            flexDirection: "block",
              marginTop: 5,
            marginBottom: 10,
          }}
        >
          <Text style={styles.text}>
            Drinked Water: {drinkedWaterWithBlock}/2000 ml
          </Text>
          <Text style={styles.text}>
            Cups: {drinkedCups}/{goalCups}
          </Text>
        </View>
        <ResetWaterLevelButton onPressAction={() => dispatch(resetWater())} />
      </View>

      <AnimatedCircularProgress
        ref={progressBar}
        size={270}
        width={40}
        fill={Number(progressLevel)}
        onAnimationComplete={() => {}}
        tintColor="#fff"
        lineCap="round"
        backgroundColor="rgba(255, 255, 255, .25)"
      />
      <Text style={styles.textSmall}>Progress: {progressLevel}%</Text>

      <View style={styles.water}>
        <DrinkWaterButton onPressAction={() => dispatch(drinkWater(250))} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  water: {
    position: "absolute",
    bottom: 0,
  },
  container: {
    alignItems: "center",
  },
  text: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
  },
  textSmall: {
    color: "rgba(255, 255, 255, .5)",
    fontSize: 16,
    marginTop: 10,
  },
  goalContainer: {
    position: "absolute",
    top: Dimensions.get("window").height > 800 ? 60 : 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
