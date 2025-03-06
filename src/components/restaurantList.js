import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
//import restaurantsData from '../data/restaurants';
import ROUTES from "../navigation";
const RestaurantList = () => {
  return (
    <FlatList
      data={restaurantsData}
      renderItem={({ item }) => (
        <ScrollView>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <Text>{item.name}</Text>
          <Text>Rating: {item.rating}</Text>
          <Text>Delivery Time: {item.deliveryTime}</Text>
        </ScrollView>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default RestaurantList;