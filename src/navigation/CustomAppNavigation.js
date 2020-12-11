import React, { useState, useRef, useEffect } from "react";
import { ScrollView, View, StyleSheet, Animated, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MainScreen } from "../screens/MainScreen";
import { AchievmentsScreen } from "../screens/AchievmentsScreen";
import { SettingsScreen } from "../screens/SettingsScreen";

import theme from "../theme";

export const CustomAppNavigation = () => {
  const [active, setActive] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(new Animated.Value(50));

  const allScreens = useRef(null);
  const mainScreenPosition = 414;

  const countOfScreens = screens.length;

  let change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== active) {
      setActive(slide);

      Animated.timing(backgroundColor, {
        toValue: slide == 1 ? 50 : slide == 0 ? 0 : 100,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  };

  useEffect(() => {
    allScreens.current.scrollTo({x:mainScreenPosition, animated: false})
    setActive(1);
    setBackgroundColor(new Animated.Value(50));
    return () => {
      // cleanup
    }
  }, [])

  return (
    <View style={{flex: 1}}>
      <LinearGradient 
        colors={[theme.COLOR_TWO, theme.COLOR_THREE]}
        start={{ x: 0.5, y: 0.8 }}
        end={{ x: 1.5, y: 0.1 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <Animated.ScrollView 
        style={{
          backgroundColor: backgroundColor.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [theme.COLOR_ONE, theme.COLOR_TWO, "rgba(16, 158, 250, .1)"]
          }),
          paddingBottom: 60
        }}
        ref={allScreens}
        horizontal 
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: `${100 * countOfScreens}%` }}
        onMomentumScrollEnd={change}
        scrollEventThrottle={200}
        decelerationRate="fast"
      >
        {
          screens.map((screen, i) => (
          <View key={i} style={{flex: 1}}>
            {screen.screen}
          </View>
          ))
        }
      </Animated.ScrollView>

      <View style={styles.pagination}>
        {
          screens.map((screen, i) => (
          <View
            key={i}
            style={i == active ? styles.pagingActiveDot : styles.pagingDot}
          ></View>
          ))
        }
      </View>
    </View>
  );
}

const screens = [
  {
    key: "s1",
    screen: <AchievmentsScreen />
  },
  {
    key: "s2",
    screen: <MainScreen />
  },
  {
    key: "s3",
    screen: <SettingsScreen />
  }
]

const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: Dimensions.get("window").height > 800 ? 20 : 15,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: screens.length * 20,
    height: 20,
    paddingHorizontal: 5,
    borderRadius: 50,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
  pagingDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0, .25)',
  },
  pagingActiveDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'black'
  }
})
