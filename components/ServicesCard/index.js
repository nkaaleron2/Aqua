import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ServicesCard = ({ icon, title }) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 100,
  },
  icon: {
    width: 34,
    height: 34,
    textAlign: 'center',
    alignItems: "center",
  },
  title: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ServicesCard;
