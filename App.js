import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./src/store/store";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { MainScreen } from "./src/screens/MainScreen";
import { AchievmentsScreen } from "./src/screens/AchievmentsScreen";

export default function App() {
  const [active, setActive] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState(new Animated.Value(0));
  const [slided, setSlided] = useState(false)

  const screens = [
    {
      key: "s1",
      screen: <MainScreen />
    },
    {
      key: "s2",
      screen: <AchievmentsScreen />
    }
  ]

  let change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    if (slide !== active) {
      setActive(slide);

      Animated.timing(backgroundColor, {
        toValue: slide == 1 ? 100 : slide == 0 ? 0 : 100,
        duration: 750,
        useNativeDriver: false
      }).start();
    }
    

    // setSlided(prev => !prev)
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AppNavigation /> */}
        <Animated.ScrollView 
          style={{
            backgroundColor: backgroundColor.interpolate({
              inputRange: [0, 100],
              outputRange: ["#00ACFF", "#6666FF"]
            }),
            paddingBottom: 60
          }}
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ width: `${100*2}%` }}
          onScroll={change}
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
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 40,
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
