import React from 'react';
import Swal from 'sweetalert2';

export const showAddToCartModal = (productId, productName, productImage, price) => {
  return Swal.fire({
    title: productName,
    html: `
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="${productImage}" style="max-width: 150px; border-radius: 8px;">
      </div>
      <div style="margin-bottom: 15px;">
        <label for="swal-quantity" style="display: block; text-align: left; margin-bottom: 5px;">จำนวน:</label>
        <input id="swal-quantity" type="number" class="swal2-input" value="1" min="1" max="10">
      </div>
      <div>
        <label for="swal-instructions" style="display: block; text-align: left; margin-bottom: 5px;">คำอธิบายของอาหาร (optional):</label>
        <textarea id="swal-instructions" class="swal2-textarea" placeholder="ไม่เอาผัก,เพิ่มซอส,อื่นๆ..."></textarea>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: 'Add to Cart',
    confirmButtonColor: '#561C24',
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusConfirm: false,
    preConfirm: () => {
      const quantity = parseInt(document.getElementById('swal-quantity').value) || 1;
      const instructions = document.getElementById('swal-instructions').value;
      
      return { quantity, instructions };
    }
  });
};

export const showSuccessToast = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Added to cart!',
    showConfirmButton: false,
    timer: 1500,
    toast: true
  });
};

export const showUpdateDescriptionModal = async (currentDescription) => {
  return Swal.fire({
    title: 'คำอธิบายของอาหาร',
    input: 'textarea',
    inputLabel: 'Update คำอธิบายของอาหาร:',
    inputValue: currentDescription || '',
    showCancelButton: true,
    confirmButtonText: 'Update',
    confirmButtonColor: '#561C24'
  });
};

export const showErrorToast = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message || 'There was an error processing your request',
  });
};

export default {
  showAddToCartModal,
  showSuccessToast,
  showUpdateDescriptionModal,
  showErrorToast
};