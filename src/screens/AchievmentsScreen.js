import React, { useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import {Leaves} from '../../assets/images/Leaves'

export const AchievmentsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.main}>

      <View style={styles.mainAchievmentContainer}>
        <Leaves height={175+40} width={175+40}/>
        <View style={{position: 'absolute', paddingBottom: 20,}}>
          <View style={styles.mainAchievment}/>
        </View>
      </View>

    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  mainAchievmentContainer: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainAchievment: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 0, 0, .25)'
  },
});
