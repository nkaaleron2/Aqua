import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../../../screens/Home";
import SearchScreen from "../../../screens/Search";
import MessagesScreen from "../../../screens/Messages";
import CartScreen from "../../../screens/Cart";
import ProfileScreen from "../../../screens/Profile";

import HomeIcon from "../../../assets/home-icon.png";
import SearchIcon from "../../../assets/search-icon.png";
import MessageIcon from "../../../assets/messages-icon.png";
import CartIcon from "../../../assets/cart-icon.png";
import ProfileIcon from "../../../assets/profile-icon.png";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let source;

          if (route.name === "HomeScreen") {
            source = focused
              ? HomeIcon
              : HomeIcon;
          } else if (route.name === "SearchScreen") {
            source = focused
              ? SearchIcon
              : SearchIcon;
          } else if (route.name === "MessagesScreen") {
            source = focused
              ? MessageIcon
              : MessageIcon;
          } else if (route.name === "CartScreen") {
            source = focused
              ? CartIcon
              : CartIcon;
          } else if (route.name === "ProfileScreen") {
            source = focused
              ? ProfileIcon
              : ProfileIcon;
          }

          // Return the Image component with the corresponding image source
          return (
            <Image source={source} style={{ width: size, height: size }} />
          );
        },
        tabBarLabelStyle: {
          display: "none",
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
