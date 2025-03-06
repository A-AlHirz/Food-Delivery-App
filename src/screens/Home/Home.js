import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import RestaurantCard from "../../components/restaurantCard";
import CategoryCard from "../../components/categoryCard";
import { getAllcategories, getAllresturants } from "../../api/categories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllcategories();
      setCategories(res);
    };
    const fetchRestaurants = async () => {
      const res = await getAllresturants();
      setRestaurants(res);
    };
    fetchCategories();
    fetchRestaurants();
  }, []);

  const filteredRestaurants = selectedCategory
    ? restaurants.filter((restaurant) => restaurant.category.name === selectedCategory)
    : restaurants;

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
      />
      {selectedCategory && (
        <Button
          title="Clear Filter"
          onPress={() => setSelectedCategory(null)}
          color="#333"
        />
      )}
      <FlatList
        data={filteredRestaurants}
        renderItem={({ item }) => <RestaurantCard restaurant={item} />}
        keyExtractor={(item) => item._id}
        style={styles.restaurantsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#CB2B1D",
  },
  categoriesList: {
    marginBottom: 10,
  },
  restaurantsList: {
    //flex: 1,
  },
});

export default Home;