import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

const HomePage = lazy(() => import('./pages/HomePage'));
const MainCoursesPage = lazy(() => import('./pages/MainCoursesPage'));
const SidesAppetizersPage = lazy(() => import('./pages/SidesAppetizersPage'));

const Loading = () => (
  <div className="text-center my-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main-courses" element={<MainCoursesPage />} />
            <Route path="/sides-appetizers" element={<SidesAppetizersPage />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;