import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import MenuCategories from '../components/home/MenuCategories';
import SpecialOffers from '../components/home/SpecialOffers';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeInClass = isLoaded ? "animate__animated animate__fadeIn" : "opacity-0";

  return (
    <Layout>
      <Hero fadeInClass={fadeInClass} />
      <MenuCategories fadeInClass={fadeInClass} />
      <SpecialOffers fadeInClass={fadeInClass} />
    </Layout>
  );
};

export default HomePage;