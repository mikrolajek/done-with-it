import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../config/colors";
import AppText from "../AppText";
import Icon from "../Icon";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="alert-circle-outline"
        color={colors.danger}
        size={20}
      />
      <AppText style={styles.error}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 8,
    paddingLeft: 15,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    marginLeft: 15,
  },
});

export default ErrorMessage;
