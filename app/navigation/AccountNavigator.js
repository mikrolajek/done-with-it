import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { TransitionPresets } from "@react-navigation/stack";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
      gestureEnabled: true,
      headerShown: false,
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
