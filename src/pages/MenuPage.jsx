import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/menu/Product';
import Cart from '../components/cart/Cart';
import Layout from '../components/layout/Layout';

const MenuPage = ({ title, products }) => {
  return (
    <>
      <header>
        <nav>
          <h1>TASTY BITES</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>

      <div className="menu-container">
        <div className="menu-left">
          <h2 className="menu-title">{title}</h2>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <Product 
                key={index}
                id={`product-${index}`}
                name={product.name}
                price={product.price}
                image={product.image}
                hasSpiceLevel={product.hasSpiceLevel}
              />
            ))}
          </div>
        </div>

        <div className="menu-right">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default MenuPage;