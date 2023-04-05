import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OrComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#A1A5C1",
    backgroundColor: "#fff",
    padding: 5,
    textTransform: "uppercase",
  },
});

export default OrComponent;
