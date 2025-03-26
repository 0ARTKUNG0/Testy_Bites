import React, { memo } from 'react';
import { useCart } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMinus, 
  faPlus, 
  faTrashCan, 
  faPencilAlt, 
  faPrint, 
  faShoppingCart 
} from '@fortawesome/free-solid-svg-icons';

const CartItem = memo(({ 
  productId, 
  item, 
  onDecrease, 
  onIncrease, 
  onRemove, 
  onUpdateDescription 
}) => {
  const itemTotalPrice = item.quantity * item.price;
  
  return (
    <tr>
      <td>
        <div>{productId}</div>
        {item.description ? (
          <div className="order-description" style={{ 
            fontSize: '0.85em', 
            fontStyle: 'italic', 
            color: '#666', 
            marginTop: '4px' 
          }}>
            {item.description}
            <FontAwesomeIcon 
              icon={faPencilAlt} 
              style={{ 
                marginLeft: '5px', 
                cursor: 'pointer', 
                color: '#999' 
              }}
              title="Edit instructions"
              onClick={() => onUpdateDescription(productId)} 
            />
          </div>
        ) : (
          <button 
            className="btn btn-link p-0"
            style={{ 
              fontSize: '0.85em', 
              color: '#999', 
              textDecoration: 'none',
              marginTop: '4px' 
            }}
            onClick={() => onUpdateDescription(productId)}
          >
            เพิ่มคําอธิบาย
          </button>
        )}
      </td>
      <td>
        <div className="quantity-controls" style={{ 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <button 
            className="btn btn-sm" 
            style={{ 
              backgroundColor: '#f8f9fa', 
              border: '1px solid #ddd', 
              width: '25px', 
              height: '25px', 
              padding: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
            onClick={() => onDecrease(productId)}
            aria-label="Decrease quantity"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span style={{ margin: '0 8px' }}>{item.quantity}</span>
          <button 
            className="btn btn-sm" 
            style={{ 
              backgroundColor: '#f8f9fa', 
              border: '1px solid #ddd', 
              width: '25px', 
              height: '25px', 
              padding: 0, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}
            onClick={() => onIncrease(productId)}
            aria-label="Increase quantity"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      <td>${item.price}</td>
      <td>${itemTotalPrice.toFixed(2)}</td>
      <td>
        <button 
          className="btn btn-danger delete-product"
          onClick={() => onRemove(productId)}
          aria-label="Remove item"
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
  );
});

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
                      <span>${totalPrice.toFixed(2)}</span>
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