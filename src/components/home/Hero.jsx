import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ fadeInClass }) => {
  return (
    <div className={`container py-5 ${fadeInClass}`} style={{ transitionDelay: '0.2s' }}>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="display-4 fw-bold" style={{ color: '#6D2240' }}>
            Authentic Japanese Cuisine
          </h2>
          <p className="lead my-4" style={{ color: '#444' }}>
            Experience the flavors of Japan with our handcrafted dishes, made from the freshest ingredients and traditional recipes.
          </p>
          <div className="d-flex gap-3">
            <Link to="/main-courses" className="btn btn-lg" style={{ backgroundColor: '#6D2240', color: 'white' }}>
              Main Courses
            </Link>
            <Link to="/sides-appetizers" className="btn btn-lg btn-outline-dark">
              Sides & Appetizers
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="/product_img/main-1.jpg" alt="Japanese cuisine" className="img-fluid rounded shadow" style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export default Hero;