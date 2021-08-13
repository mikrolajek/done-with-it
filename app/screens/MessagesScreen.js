import React, { useState } from "react";

import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "Temat pierwszy",
    description: "Treść pierwsza.",
    image: require("../assets/osoba1.jpg"),
  },
  {
    id: 2,
    title: "Temat drugi",
    description: "Treść druga",
    image: require("../assets/osoba2.jpg"),
  },
  {
    id: 3,
    title: "Temat trzeci",
    description: "Treść trzecia",
    image: require("../assets/osoba1.jpg"),
  },
  {
    id: 4,
    title: "Temat czwarty",
    description: "Treść czwarta",
    image: require("../assets/osoba7.jpg"),
  },
  {
    id: 5,
    title: "Temat piąty",
    description: "Treść piąta",
    image: require("../assets/osoba8.jpg"),
  },
  {
    id: 6,
    title: "Temat szósty",
    description: "Treść szósta",
    image: require("../assets/osoba7.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Messege selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/me.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
