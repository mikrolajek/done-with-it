import React from "react";
import { View, Image, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/sample.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Ankieta 1</AppText>
        <AppText style={styles.subTitle}>Data</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/me.jpg")}
            title="Kamil Mikołajek"
            subTitle="5 Surveys"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default ListingDetailsScreen;
