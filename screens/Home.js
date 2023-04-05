import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  Platform
} from "react-native";
import Heading from "../components/Heading";
import HomeFarmProgressCard from "../components/HomeFarmProgressCard";
import HorizontalProfileCard from "../components/HorizontalProfileCard";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import ServicesCard from "../components/ServicesCard";
import ServicesCardsList from "../components/ServicesCardsList";

const servicesData = [
  { id: "1", title: "Card 1", icon: "icon-1" },
  { id: "2", title: "Card 2", icon: "icon-2" },
  { id: "3", title: "Card 3", icon: "icon-3" },
  { id: "4", title: "Card 4", icon: "icon-4" },
  { id: "5", title: "Card 5", icon: "icon-5" },
  { id: "6", title: "Card 6", icon: "icon-6" },
  { id: "7", title: "Card 7", icon: "icon-7" },
  { id: "8", title: "Card 8", icon: "icon-8" },
  { id: "9", title: "Card 9", icon: "icon-9" },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeTopArea}>
        <View style={styles.profileCardArea}>
          <HorizontalProfileCard
            name="Elton Quin"
            greeting="Good Morning!"
            imageSource={require("../assets/elton.png")}
          />
          <Image
            source={require("../assets/notification.png")}
            style={styles.notification}
          />
        </View>
        <HomeFarmProgressCard />
        <SearchBar placeholder="Search" />
      </View>
      <ScrollView style={styles.homeBottomArea}>
        {/* bottom text  */}
        <View style={styles.trendingStories}>
          <Heading
            title="Trending Stories"
            onPress={() => console.log("View All Pressed")}
          />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* content */}
            <ProductCard
              imageSource={require("../assets/tilapia.png")}
              title="Tilapia Fish"
              subtitle="Farms in 2022"
              icon={require("../assets/view-icon.png")}
              count="40999"
            />
            <ProductCard
              imageSource={require("../assets/tilapia.png")}
              title="Tilapia Fish"
              subtitle="Farms in 2022"
              icon={require("../assets/view-icon.png")}
              count="40999"
            />
            <ProductCard
              imageSource={require("../assets/tilapia.png")}
              title="Tilapia Fish"
              subtitle="Farms in 2022"
              icon={require("../assets/view-icon.png")}
              count="40999"
            />
          </ScrollView>
        </View>
        <View style={styles.services}>
          <Heading
            title="Services"
            // onPress={() => console.log("View All Pressed")}
          />
          <ServicesCardsList />
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="transparent"
        style="light"
        translucent={true}
      />
    </View>
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
  homeTopArea: {
    height: 300,
    width: "100%",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#417FC2",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileCardArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  trendingStories: {
    width: "100%",
  },
  services: {
    width: "100%",
    marginHorizontal: 0,
  },
  notification: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeBottomArea: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default HomeScreen;
