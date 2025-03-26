import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const MenuCategories = ({ fadeInClass }) => {
  return (
    <div className={`container py-5 ${fadeInClass}`} style={{ transitionDelay: '0.4s' }}>
      <h2 className="text-center mb-5" style={{ color: '#6D2240' }}>Explore Our Menu</h2>
      
      <div className="row g-4 justify-content-center">
        <div className="col-md-6">
          <div className="card__article shadow h-100">
            <img src="../public/main-1.jpg" alt="Japanese Katsu Curry" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Main Courses</h2>
              <p className="card__description">Delicious Japanese main dishes including Katsu Don and Curry Rice</p>
              <Link to="/main-courses" className="card__button">
                <FontAwesomeIcon icon={faUtensils} className="me-2" />
                View Menu
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card__article shadow h-100">
            <img src="../public/main-2.jpg" alt="Japanese Tempura Platter" className="card__img" />
            <div className="card__data">
              <h2 className="card__title">Sides & Appetizers</h2>
              <p className="card__description">Perfect complements to your meal or enjoy them on their own</p>
              <Link to="/sides-appetizers" className="card__button">
                <FontAwesomeIcon icon={faPizzaSlice} className="me-2" />
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategories;