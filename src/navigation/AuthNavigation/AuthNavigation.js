import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Profile/login";
import RegistrationScreen from "../../screens/Profile/register";
import Welcome from "../../screens/Home/Welcome";
import ROUTES from "../index";
//create the stack that will navigate me from the login screen to the register screen and vice versa
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      
      headerShadowVisible: false,
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
