import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TextInput,
} from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";

function WelcomeScreen(props) {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <ImageBackground
      blurRadius={3}
      opacity={0.5}
      style={styles.background}
      source={require("../assets/background9.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          // opacity={0.6}
          //blurRadius={0.3}
          style={styles.logo}
          source={require("../assets/logo.png")}
        />
      </View>
      {/* <View style={styles.inputContainer}>
        <AppTextInput icon="account" placeholder="e-mail" />
        <AppTextInput
          secureTextEntry={true}
          icon="lock"
          placeholder="password"
        />
      </View> */}
      <View style={styles.buttonsContainer}>
        <AppButton
          title="LOGIN"
          onPress={() => alert("Login")}
          color="primary"
        ></AppButton>
        <AppButton
          title="REGISTER"
          onPress={() => alert("Register")}
          color="secondary"
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginBottom: 50,
  },
  logoContainer: {
    position: "absolute",
    top: 120,
    alignItems: "center",
  },
  logo: {
    height: 110,
    width: 320,
    opacity: 0.8,
  },
  input: {
    height: 40,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.lightgray,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 50,
    marginBottom: 40,
  },
});

export default WelcomeScreen;
