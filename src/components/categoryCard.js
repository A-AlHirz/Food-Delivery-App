import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ROUTES from "../navigation";
const CategoryCard = ({ category, selectedCategory, setSelectedCategory }) => {
  const isSelected = selectedCategory === category.name;
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(category.name)}
    >
      <View style={styles.card}>
        <Image
          source={{ uri: category.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.name}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
    marginBottom: 40,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: -10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CategoryCard;