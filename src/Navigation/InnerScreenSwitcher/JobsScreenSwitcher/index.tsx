import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";

import MainJobFeed from "./../../../screens/Jobs/Home";
import JobsView from "./../../../screens/Jobs/JobsView";

export default createStackNavigator(
  {
    MainJobFeed: {
      screen: MainJobFeed,
      path: "jobs"
    },
    JobsScreen: {
      screen: JobsView,
      path: "jobId/:id"
    }
  },
  {
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);
// createSwitchNavigator(
//   {
//     MainJobFeed
//   },
//   {
//     initialRouteName: "MainJobFeed"
//   },
//   {
//     headerMode: "none",
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 0,
//         timing: Animated.timing,
//         easing: Easing.step0
//       }
//     })
//   }
// );
