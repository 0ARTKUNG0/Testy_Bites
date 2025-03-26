import React from 'react';
import MenuPage from './MenuPage';

const mainCoursesProducts = [
  {
    name: "Katsu Don Chicken with Egg",
    price: 159,
    image: "./product_img/main_courses1.jpg"
  },
  {
    name: "Katsu Don Beef Steak with Egg",
    price: 169,
    image: "./product_img/main_courses2.jpg"
  },
  {
    name: "Katsu Don Chicken with Sauce",
    price: 159,
    image: "./product_img/main_courses3.jpg"
  },
  {
    name: "Katsu Don Salmon Fillet with Sauce",
    price: 169,
    image: "./product_img/main_courses4.jpg"
  },
  {
    name: "Katsu Don Chicken Set (Large)",
    price: 199,
    image: "./product_img/main_courses5.jpg"
  },
  {
    name: "Curry Rice with Tonkatsu Pork",
    price: 219,
    image: "./product_img/main_courses6.jpg",
    hasSpiceLevel: true
  },
  {
    name: "Katsu Don Fish with Egg",
    price: 209,
    image: "./product_img/main_courses7.jpg"
  },
  {
    name: "Katsu Don Shrimp with Egg",
    price: 239,
    image: "./product_img/main_courses8.jpg"
  },
  {
    name: "Katsu Don Mix with Sauce",
    price: 279,
    image: "./product_img/main_courses9.jpg"
  }
];

const MainCoursesPage = () => {
  return <MenuPage title="Main Courses" products={mainCoursesProducts} />;
};

export default MainCoursesPage;