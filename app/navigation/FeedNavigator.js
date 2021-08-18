import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingScreen from "../screens/ListingScreen";
import { TransitionPresets } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      ...TransitionPresets.ModalSlideFromBottomIOS,
      gestureEnabled: true,
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
