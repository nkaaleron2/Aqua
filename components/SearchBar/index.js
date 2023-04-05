import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons"; // or any other icon library you prefer

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" style={styles.icon} />
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    fontSize: 18,
    color: "#999999",
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 12,
    color: "#333333",
    paddingVertical: 0,
  },
});

export default SearchBar;
