import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ imageSource, title, subtitle, icon, count }) => {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.row}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.count}>{count}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    height: 100,
    marginHorizontal: 10,
  },
  left: {
    width: 74,
    height: 74,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  right: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  icon: {
    width: 12,
    height: 10,
    marginRight: 4,
  },
  count: {
    fontSize: 10,
    color: "#9397A0",
  },
});

export default ProductCard;
