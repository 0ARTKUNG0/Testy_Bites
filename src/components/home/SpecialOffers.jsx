import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPercent } from '@fortawesome/free-solid-svg-icons';

const SpecialOffers = ({ fadeInClass }) => {
  const specialOffers = [
    {
      title: "Combo Discount",
      description: "Get 10% off when you order any main dish with a side",
      icon: faPercent
    },
    {
      title: "Family Set",
      description: "Buy our special family set for ฿999 and save 20%",
      icon: faUtensils
    }
  ];

  return (
    <div className={`container py-5 ${fadeInClass}`} style={{ transitionDelay: '0.6s' }}>
      <h2 className="text-center mb-4" style={{ color: '#6D2240' }}>Special Offers</h2>
      <div className="row g-4">
        {specialOffers.map((offer, index) => (
          <div key={index} className="col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle p-3 me-3" style={{ backgroundColor: '#FAE6D9' }}>
                    <FontAwesomeIcon icon={offer.icon} style={{ color: '#6D2240', fontSize: '1.5rem' }} />
                  </div>
                  <h3 className="card-title mb-0">{offer.title}</h3>
                </div>
                <p className="card-text">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;