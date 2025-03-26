import React from 'react';
import { useCart } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartItem from './CartItem';

const Cart = () => {
  const { 
    cart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart, 
    updateDescription,
    printReceipt,
    calculateTotalPrice
  } = useCart();

  const cartIsEmpty = Object.keys(cart).length === 0;
  const totalPrice = calculateTotalPrice();
  
  return (
    <div className="card" style={{ 
      borderRadius: '15px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <div className="card-header" style={{ 
        backgroundColor: '#561C24', 
        color: 'white', 
        borderTopLeftRadius: '15px', 
        borderTopRightRadius: '15px', 
        padding: '15px' 
      }}>
        <h2 style={{ 
          margin: 0, 
          display: 'flex', 
          alignItems: 'center', 
          fontSize: '22px' 
        }}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> 
          Your Order
        </h2>
      </div>
      
      <div className="card-body">
        <div id="cart" className="mt-2">
          {cartIsEmpty ? (
            <p>ยังไม่มีสินค้าในตะกร้า.</p>
          ) : (
            <>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cart).map(([productId, item]) => (
                      <CartItem
                        key={productId}
                        productId={productId}
                        item={item}
                        onDecrease={decreaseQuantity}
                        onIncrease={increaseQuantity}
                        onRemove={removeFromCart}
                        onUpdateDescription={updateDescription}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-end mt-3">
                <div className="card" style={{ width: 'auto', minWidth: '200px' }}>
                  <div className="card-body py-2">
                    <h5 className="mb-0 d-flex justify-content-between">
                      <span>Total:</span>
                      <span>฿{totalPrice.toFixed(2)}</span>
                    </h5>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        <button 
          className="btn btn-block mt-3" 
          id="printCart" 
          style={{ 
            backgroundColor: '#561C24', 
            color: 'white', 
            fontWeight: 600, 
            padding: '12px', 
            borderRadius: '8px',
            width: '100%'
          }}
          onClick={printReceipt}
          disabled={cartIsEmpty}
        >
          <FontAwesomeIcon icon={faPrint} className="mr-2" /> Print Order Receipt
        </button>
      </div>
    </div>
  );
};

export default Cart;