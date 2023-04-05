import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Heading = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onPress && (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#417FC2",
    fontWeight: "bold",
  },
});

export default Heading;
