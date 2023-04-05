import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const HorizontalProfileCard = ({ name, greeting, imageSource }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.profileImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>{greeting}</Text>
        <Text style={styles.nameText}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flexDirection: "column",
  },
  nameText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
  },
  greetingText: {
    fontSize: 14,
    color: "#fff",
  },
});

export default HorizontalProfileCard;
