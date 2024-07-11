import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    try {
      const savedCart = await AsyncStorage.getItem('cart');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart', error);
    }
  };

  const saveCart = async (newCart) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
    } catch (error) {
      console.error('Failed to save cart', error);
    }
  };

  const addToCart = (product) => {
    const newCart = [...cart, product];
    saveCart(newCart);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id !== productId);
    saveCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, loadCart }}>
      {children}
    </CartContext.Provider>
  );
};
