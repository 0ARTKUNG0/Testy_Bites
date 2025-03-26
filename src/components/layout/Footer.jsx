import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="mt-5 py-4" style={{ backgroundColor: '#561C24', color: 'white' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h4>TASTY BITES</h4>
            <p className="mb-1"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />123 Food Street, Cuisine City</p>
            <p><FontAwesomeIcon icon={faPhone} className="me-2" />(123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/main-courses" className="text-white text-decoration-none">Main Courses</Link></li>
              <li><Link to="/sides-appetizers" className="text-white text-decoration-none">Sides & Appetizers</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-4"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-white fs-4"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white fs-4"><i className="fab fa-line"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="mb-0">&copy; {new Date().getFullYear()} TASTY BITES. All rights reserved.</p>
        </div>
        <div className="disclaimer" style={{ fontSize: "0.8rem", marginTop: "10px", opacity: "0.7" }}>
        This website is a student project created for educational purposes only. 
        All images are used for academic demonstration and are property of their respective owners. 
        Not affiliated with Katsuya or any commercial entities.
        </div>
      </div>
    </footer>
  );
};

export default Footer;