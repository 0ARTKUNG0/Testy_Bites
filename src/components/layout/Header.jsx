import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-4 shadow-sm">
      <nav className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="mb-0" style={{ color: '#6D2240', fontWeight: 'bold', fontSize: '2.25rem' }}>
            TASTY BITES
          </h1>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: '#6D2240', fontWeight: '500' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/main-courses" className="nav-link" style={{ color: '#6D2240', fontWeight: '500' }}>Menu</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;