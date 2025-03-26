import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMinus, 
  faPlus, 
  faTrashCan, 
  faPencilAlt 
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
      <td>฿{item.price}</td>
      <td>฿{itemTotalPrice.toFixed(2)}</td>
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

export default CartItem;