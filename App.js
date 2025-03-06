import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { CartProvider } from "./src/context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CB2B1D",
  },
});

export default App;