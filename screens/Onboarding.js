import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const [step, setStep] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const navigation = useNavigation();

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <ImageBackground
      // style={{ flex: 1 }}
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
      source={require("../assets/splash1.png")}
    >
      <View style={styles.container}>
        {step === 1 && (
          <View style={styles.content}>
            <View style={styles.contentInnerContainer}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.image}
                resizeMode="contain"
                aspectRatio={3}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleNextStep}>
                <Text style={styles.buttonText}>Start</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {step === 2 && (
          <View style={styles.content}>
            <Image
              source={require("../assets/logo.png")}
              style={styles.image}
              resizeMode="contain"
              aspectRatio={3}
            />
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              neque risus amet nisl eu aliquet accumsan. Feugiat imperdiet non
              nunc, quisque dignissim nec morbi habitant cursus. Nunc dui
              maecenas ultricies neque, turpis faucibus. Sit in arcu id arcu,
              dignissim maecenas etiam tempor.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Eget neque risus amet nisl eu aliquet
              accumsan. Feugiat imperdiet non nunc, quisque dignissim nec morbi
              habitant cursus. Nunc dui maecenas ultricies neque, turpis
              faucibus. Sit in arcu id arcu, dignissim maecenas etiam
              tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.tempor.Lorem ipsum dolor sit amet,
            </Text>
            <View style={styles.buttonContainerTwo}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("SignInScreen");
                }}
              >
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent={true}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 40,
  },
  contentInnerContainer: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#fff",
  },
  buttonContainer: {
    width: "100%",
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonContainerTwo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#F7942A",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default OnboardingScreen;
