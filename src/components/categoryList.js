import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image } from 'react-native';
//import categoriesData from '../data/categories';
import CategoryCard from './categoryCard';
import { getAllcategories, getAllresturants } from "../../api/categories";
import ROUTES from "../navigation";

const CategoryList = ({
  
  selectedCategory,
  setSelectedCategory,
}) => {
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
  const getAllcates = categories.map((category) => {
    return (
      <CategoryCard
      key={category.id}
      categoryName={category.categoryName}
      categoryImage={category.categoryImage}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
    )
  });
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.categoryImage }} style={{ width: 50, height: 50 }} />
          <Text>{item.categoryName}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CategoryList;