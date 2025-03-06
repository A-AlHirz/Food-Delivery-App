import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ROUTES from "../navigation";
const RestaurantCard = ({ restaurant }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Menu', { menuItems: restaurant.items });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
      <Text style={styles.deliveryTime}>Delivery Time: {restaurant.deliveryTime}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 210,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  rating: {
    marginTop: 3,
  },
  deliveryTime: {
    marginTop: 3,
    color: '#777',
  },
});

export default RestaurantCard;