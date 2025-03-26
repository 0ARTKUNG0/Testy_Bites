import React from 'react';
import MenuPage from './MenuPage';

const sidesAppetizersProducts = [
  {
    name: "Tonkatsu Pork Fillet",
    price: 119,
    image: "../public/Sides7.jpg"
  },
  {
    name: "Tonkatsu Pork Tenderloin",
    price: 69,
    image: "../public/Sides1.jpg"
  },
  {
    name: "Tonkatsu Ground Pork",
    price: 89,
    image: "../public/Sides8.jpg"
  },
  {
    name: "Katsu Shrimp",
    price: 59,
    image: "../public/Sides2.jpg"
  },
  {
    name: "Fried Chicken Karaage (10 pieces)",
    price: 159,
    image: "../public/Sides3.jpg"
  },
  {
    name: "Combo Box 1: Tonkatsu Pork Tenderloin and Katsu Shrimp",
    price: 99,
    image: "../public/Sides4.jpg"
  },
  {
    name: "Double Size: Cheesy Sticks (2 pieces) and Katsu Shrimp (1 piece) or Fried Chicken Karaage (3 pieces)",
    price: 105,
    image: "../public/Sides5.jpg"
  },
  {
    name: "Party Size: Choose Your Menu",
    price: 209,
    image: "../public/Sides6.jpg"
  },
  {
    name: "Katsu Chicken",
    price: 99,
    image: "../public/Sides9.jpg"
  }
];

const SidesAppetizersPage = () => {
  return <MenuPage title="Sides & Appetizers" products={sidesAppetizersProducts} />;
};

export default SidesAppetizersPage;