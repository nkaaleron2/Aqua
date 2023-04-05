import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import OrComponent from "../components/OrComponent";
import SignInSocialButtons from "../components/SignInSocialButtons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = () => {
    // Implement sign-in logic
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic
  };

  const handleSignUp = () => {
    // Implement sign-up logic
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.logoAreaTop}>
          <Image
            source={require("../assets/logo-color.png")}
            style={styles.image}
            resizeMode="contain"
            aspectRatio={3}
          />
          <Text style={styles.signInToStart}>Sign in to start</Text>
        </View>
        <View
          style={{
            flex: 1,
            width: "100%",
            height: "70%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <View style={styles.backgroundImageContainer}>
            <Image
              source={require("../assets/splash1.png")}
              style={styles.backgroundImage}
            />
          </View>
          <View style={styles.form}>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Phone No./Email"
                placeholderTextColor="#fff"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                autoFocus
              />
            </View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your password"
                placeholderTextColor="#fff"
                secureTextEntry
                autoCapitalize="none"
                autoCompleteType="password"
                textContentType="password"
              />
            </View>
            <TouchableOpacity
              style={styles.forgotPassword}
              onPress={handleForgotPassword}
            >
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signInButtoncontainer}>
            <TouchableOpacity
              style={styles.signInButton}
              // onPress={handleSignIn}
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <OrComponent text="or" />
          <SignInSocialButtons />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar
          backgroundColor="transparent"
          style="dark"
          translucent={true}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  logoAreaTop: {
    height: "30%",
    width: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  signInToStart: {
    color: "#9D9D9D",
    fontSize: 16,
  },
  formAreaBottom: {
    height: "70%",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  form: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  formGroup: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    color: "#999",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 14,
    color: "#fff",
  },
  forgotPassword: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#999",
    fontSize: 12,
    textAlign: "right",
    color: "#fff",
  },
  signInButtoncontainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  signInButton: {
    backgroundColor: "#f7942a",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
    width: "100%",
  },
  signInButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpButton: {
    marginTop: 20,
  },
  signUpButtonText: {
    color: "#999",
    fontSize: 14,
    marginHorizontal: 30,
    textAlign: "center",
    color: "#fff",
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default SignInScreen;
