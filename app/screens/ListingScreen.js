import React from "react";

import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
const listings = [
  {
    id: 1,
    title: "Apteka DOZ",
    subTitle: "10.10.10",
    image: require("../assets/sample4.jpg"),
  },
  {
    id: 2,
    title: "Apteka Superpharm",
    subTitle: "10.10.11",
    image: require("../assets/sample5.jpg"),
  },
  {
    id: 3,
    title: "Sklep SFD",
    subTitle: "10.10.11",
    image: require("../assets/sample3.jpg"),
  },
  {
    id: 4,
    title: "Apteka DOZ",
    subTitle: "10.10.10",
    image: require("../assets/sample4.jpg"),
  },
  {
    id: 5,
    title: "Sklep SFD",
    subTitle: "10.10.11",
    image: require("../assets/sample3.jpg"),
  },
  {
    id: 6,
    title: "Apteka DOZ",
    subTitle: "10.10.10",
    image: require("../assets/sample5.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"Data dodania: " + item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.lightgray,
  },
});

export default ListingScreen;
