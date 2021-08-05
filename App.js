import React, { useState } from "react";
import { TextInput, Text, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/screens/ListingScreen";
import AppPicker from "./app/components/AppPicker";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from "./app/screens/AccountScreen";

import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return <LoginScreen />;
}
