import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ServicesCard from "../ServicesCard";

const data = [
  { id: "1", title: "Buy Feeds", icon: require("../../assets/buy-feeds.png") },
  {
    id: "2",
    title: "Feed Calculator",
    icon: require("../../assets/feed-calculator.png"),
  },
  { id: "3", title: "Inquiries", icon: require("../../assets/inquiries.png") },
  {
    id: "4",
    title: "Tilapia Farming",
    icon: require("../../assets/tilapia-farming.png"),
  },
  {
    id: "5",
    title: "News & Proms",
    icon: require("../../assets/news-and-proms.png"),
  },
  {
    id: "6",
    title: "Task Manager",
    icon: require("../../assets/task-manager.png"),
  },
];

const ServicesCardsList = () => {
  const renderCard = ({ item }) => <ServicesCard title={item.title} icon={item.icon} />;

  const renderSection = () => (
    <FlatList
      data={data}
      renderItem={renderCard}
      numColumns={3}
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <View>
      {renderSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ServicesCardsList;
