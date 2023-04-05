import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProgressCircle from "react-native-progress/Circle";

const HomeFarmProgressCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.leftRow}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>Farm progress</Text>
          <Text style={styles.subtitle}>Fish is almost ready for sale!</Text>
          <View style={styles.percentwrapper}>
            <Image
              source={require("../../assets/up.png")}
              style={styles.notification}
            />
            <Text style={styles.percent}>13% than week ago</Text>
          </View>
        </View>
        <View style={styles.icon}>{/* Add your icon here */}</View>
      </View>
      <View style={styles.rightRow}>
        {/* <ProgressCircle
          size={80}
          progress={0.78}
          showsText={true}
          textStyle={styles.chartText}
          color="#F7942A"
          borderWidth={0}
          thickness={10}
        /> */}
        <Image
          source={require("../../assets/Progress.png")}
          style={styles.notification}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    padding: 10,
    marginVertical: 10,
  },
  leftRow: {
    flex: 1,
    flexDirection: "row",
  },
  rightRow: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  leftColumn: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "bold",
  },
  percentwrapper: {
    flexDirection: "row",
    marginRight: 5,
  },
  percent: {
    fontSize: 9,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  chartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F7942A",
  },
});

export default HomeFarmProgressCard;
