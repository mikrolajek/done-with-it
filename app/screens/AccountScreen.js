import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";

const menuItems = [
  {
    title: "Moje ankiety",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "Moje wiadomości",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Kamil Mikołajek"
          subTitle="k.mikolajek@savoir.pl"
          image={require("../assets/me.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Wyloguj"
          IconComponent={<Icon name="logout" backgroundColor={colors.brown} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginVertical: 20,
  },
});

export default AccountScreen;
