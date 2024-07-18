import React, { useState, createContext, useContext, useEffect } from 'react';

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Função para pegar item no cart
  function getFromCart(id) {
    return cart.find(obj => obj.id === id);
  }

  // Função para adicionar item do cart
  function addToCart(item) {
    if (isInCart(item.id)) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(obj => 
          obj.id === item.id ? { ...obj, quantity: obj.quantity + item.quantity } : obj
        );
        saveCart(updatedCart);
        return updatedCart;
      });
    } else {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      saveCart(updatedCart);
    }
  }

  // Função para remover item do cart
  function removeFromCart(itemId) {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
    saveCart(updatedCart);
  }

  // Função para checar se tem item no cart
  function isInCart(itemId) {
    return cart.some(item => item.id === itemId);
  }

  // Função pegar quantidade dos item no cart
  function cartQtd() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }
  
  // Função pegar total do cart
  function cartTotal() {
    return cart.reduce((acc, item) => acc + item.quantity * (item.priceWithDiscount || item.price), 0);
  }

  // Função para adicionar 1 na quantidade do item no carrinho
  function addItem(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
      saveCart(updatedCart);
      return updatedCart;
    });
  }

  // Função para remover 1 na quantidade do item no carrinho
  function removeItem(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id && obj.quantity > 0 ? { ...obj, quantity: obj.quantity - 1 } : obj
      );
      saveCart(updatedCart);
      return updatedCart;
    });
  }

  // Função para limpar cart
  function cleanCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  // Salvar no localStorage
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // carregar o carrinho do localStorage ao montar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, cartQtd, cartTotal, addItem, removeItem, cleanCart, getFromCart }}>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
  }

  return context;
}
