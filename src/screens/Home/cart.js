import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from '../../context/CartContext';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const CartScreen = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item._id)}>
              <FontAwesome6 name="trash-can" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item._id.toString()}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Price: ${calculateTotalPrice()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#CB2B1D",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  price: {
    fontWeight: "bold",
  },
  totalContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CartScreen;