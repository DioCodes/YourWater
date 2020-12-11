import React, { useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Text, Linking } from "react-native";

import {Leaves} from '../../assets/images/Leaves'
import {ContainerButton} from '../components/ContainerButton'

export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView contentContainerStyle={styles.main}>
        <Text style={styles.header}>Settings</Text>

        <ContainerButton 
          action={() => {}} 
          name="Reminder" 
          iconName="ios-notifications" 
        />
        <ContainerButton 
          action={() => {}} 
          name="Rate YourWater" 
          iconName="ios-star"
        />
        <ContainerButton 
          action={() => {}} 
          name="Share the app" 
          iconName="ios-share-alt"
        />
        <ContainerButton 
          action={() => Linking.openURL("instagram://user?username=dio.codes")}
          name="Developers Instagram" 
          iconName="logo-instagram" 
        />
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  main: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center'
  },
  header: {
    fontSize: 26,
    color: '#fff',
  }
});
