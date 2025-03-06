import React, { useState, useContext } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { CartContext } from "../../context/CartContext";

const MenuScreen = ({ route }) => {
  const { menuItems } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id?.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#CB2B1D",
  },
  menuItem: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  details: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#333",
  },
  description: {
    color: "#777",
    marginTop: 5,
  },
  price: {
    marginTop: 5,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    marginTop: 10,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default MenuScreen;