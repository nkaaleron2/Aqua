import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SignInSocialButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../assets/google-icon.png")}
          style={styles.backgroundImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
        <Image
          source={require("../../assets/facebook-icon.png")}
          style={styles.backgroundImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    width: "100%",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F4F8A8",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    width: "45%",
    justifyContent: "center",
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F4F8A8",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 5,
    width: "45%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    marginLeft: 10,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
});

export default SignInSocialButtons;
