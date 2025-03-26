import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import SpiceLevelSelector from './SpiceLevelSelector';

const Product = ({ id, name, price, image, hasSpiceLevel = false }) => {
  const { addToCart } = useCart();
  const [spiceLevel, setSpiceLevel] = useState("No Spice");

  const handleAddToCart = () => {
    addToCart(hasSpiceLevel ? `${name} (${spiceLevel})` : name, price, image);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">฿{price}</p>
      </div>
      
      {hasSpiceLevel && (
        <SpiceLevelSelector 
          id={id} 
          spiceLevel={spiceLevel} 
          onSpiceLevelChange={setSpiceLevel} 
        />
      )}

      <button 
        className="add-to-cart-btn" 
        data-product-id={name}
        data-price={price}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;