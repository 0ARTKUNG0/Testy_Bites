import React, { createContext, useState, useContext, useCallback } from 'react';
import { 
  showAddToCartModal, 
  showSuccessToast, 
  showUpdateDescriptionModal,
  showErrorToast 
} from '../components/cart/CartModal';
import {
  isSpiceLevelProduct,
  calculateTotalPrice as calcTotalPrice,
  printReceipt as printReceiptUtil
} from '../utils/cartUtils';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCartWithQuantity = useCallback((productId, price, quantity, instructions) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      
      if (!newCart[productId]) {
        newCart[productId] = { 
          quantity: quantity, 
          price: price,
          description: instructions || ""
        };
      } else {
        newCart[productId].quantity += quantity;
        if (instructions) {
          newCart[productId].description = instructions;
        }
      }
      
      return newCart;
    });
    
    showSuccessToast();
  }, []);

  const addToCart = useCallback(async (productId, price, productImage) => {
    try {
      const result = await showAddToCartModal(productId, productId, productImage, price);
      
      if (result.isConfirmed) {
        const { quantity, instructions } = result.value;

        if (isSpiceLevelProduct(productId)) {
          const productElement = document.querySelector(`[data-product-id="${productId}"]`).closest('.product');
          const selectedSpice = productElement.querySelector('input[name^="spice-"]:checked');
          const spiceLevel = selectedSpice ? selectedSpice.value : "No Spice";
          
          const fullProductName = `${productId} (${spiceLevel})`;
          
          addToCartWithQuantity(fullProductName, price, quantity, instructions);
        } else {
          addToCartWithQuantity(productId, price, quantity, instructions);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      showErrorToast('There was an error adding this item to your cart');
    }
  }, [addToCartWithQuantity]);

  const increaseQuantity = useCallback((productId) => {
    setCart(prevCart => {
      if (!prevCart[productId]) return prevCart;
      
      const newCart = { ...prevCart };
      newCart[productId] = { 
        ...newCart[productId],
        quantity: newCart[productId].quantity + 1 
      };
      
      return newCart;
    });
  }, []);

  const decreaseQuantity = useCallback((productId) => {
    setCart(prevCart => {
      if (!prevCart[productId]) return prevCart;
      
      const newCart = { ...prevCart };
      const newQuantity = newCart[productId].quantity - 1;
      
      if (newQuantity <= 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = { 
          ...newCart[productId],
          quantity: newQuantity
        };
      }
      
      return newCart;
    });
  }, []);

  const removeFromCart = useCallback((productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  }, []);

  const updateDescription = useCallback(async (productId) => {
    if (!cart[productId]) return;

    const result = await showUpdateDescriptionModal(cart[productId].description);

    if (result.isConfirmed) {
      setCart(prevCart => {
        const newCart = { ...prevCart };
        newCart[productId] = { 
          ...newCart[productId],
          description: result.value 
        };
        return newCart;
      });
    }
  }, [cart]);

  const printReceipt = useCallback(() => {
    if (Object.keys(cart).length === 0) {
      showErrorToast('Please add items to your cart before printing a receipt');
      return;
    }
    
    const result = printReceiptUtil(cart);
    
    if (!result.success) {
      showErrorToast('There was a problem printing your receipt. Please try again.');
    }
  }, [cart]);

  const calculateTotalPrice = useCallback(() => {
    return calcTotalPrice(cart);
  }, [cart]);

  const contextValue = {
    cart, 
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    updateDescription,
    printReceipt,
    calculateTotalPrice
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;