import React from "react";
import Constants from "expo-constants";
import { ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightgray,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default Screen;
