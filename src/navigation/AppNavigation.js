import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as Haptics from "expo-haptics";

import { MainScreen } from "../screens/MainScreen";
import { AchievmentsScreen } from "../screens/AchievmentsScreen";
import { DrinkWaterNavButton } from "../components/DrinkWaterNavButton";

export const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const DrinkWaterComponent = () => {
    return null;
  };
  const tabPress = () => {
    return {
      tabPress: () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      },
    };
  };

  const HomeTabNavigator = () => {
    return (
      <Tab.Navigator
        initialRouteName="home"
        tabBarOptions={{
          activeTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "Главная",
            tabBarLabel: "Главная",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-contact" size={30} color={color} />
            ),
          }}
          listeners={tabPress}
        />
        <Tab.Screen
          name="Drink"
          component={DrinkWaterComponent}
          options={{
            title: "Главная",
            tabBarLabel: "Главная",
            tabBarButton: () => <DrinkWaterNavButton />,
          }}
        />
        <Tab.Screen
          name="Achievments"
          component={AchievmentsScreen}
          options={{
            title: "Магазин",
            tabBarLabel: "Магазин",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-basket" size={30} color={color} />
            ),
          }}
          listeners={tabPress}
        />
      </Tab.Navigator>
    );
  };

  const MainStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "transparent",
            elevation: 0,
          },
          headerBackTitle: "Back",
          headerTintColor: "#000",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MainStack />
    </NavigationContainer>
  );
};
