import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import CartNavigation from "../CartNavigation/CartNavigation";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
//import Cart from "../../screens/Home/cart";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {
          gap: 200,
        }
      }}
    >
      <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="AuthNav"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="CartNav"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cart-arrow-down" size={size} color={color} />
          ),
          tabBarLabel: "Cart",
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});