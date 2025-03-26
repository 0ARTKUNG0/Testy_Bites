export const isSpiceLevelProduct = (productId) => {
    const productElement = document.querySelector(`[data-product-id="${productId}"]`)?.closest('.product');
    return productElement ? productElement.querySelector('input[name^="spice-"]') !== null : false;
  };
  export const generateCartReceipt = (cart) => {
    const orderDate = new Date();
    const formattedDate = orderDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const orderNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    let receiptContent = `
        <style>
          @page {
            size: 80mm auto;
            margin: 5mm;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
          }
          .receipt-container {
            max-width: 80mm;
            margin: 0 auto;
          }
          .receipt-header {
            text-align: center;
            margin-bottom: 15px;
          }
          .receipt-header img {
            max-width: 60px;
            margin: 0 auto 5px;
          }
          .receipt-title {
            font-size: 18px;
            font-weight: bold;
            color: #561C24;
            margin: 8px 0;
          }
          .restaurant-info {
            font-size: 10px;
            margin-bottom: 5px;
          }
          .qr-code {
            width: 60px;
            height: 60px;
            margin: 5px auto;
          }
          .connect-line {
            font-size: 9px;
            color: #666;
            margin: 3px 0 10px;
          }
          .receipt-details {
            margin: 12px 0;
            padding: 5px 0;
            border-top: 1px dashed #ccc;
            border-bottom: 1px dashed #ccc;
            font-size: 11px;
          }
          .bold {
            font-weight: bold;
          }
          .receipt-table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
          }
          .receipt-table th {
            border-bottom: 1px solid #ddd;
            padding: 5px;
            text-align: left;
            font-size: 11px;
            background-color: #f8f8f8;
          }
          .receipt-table td {
            padding: 7px 5px;
            text-align: left;
            font-size: 11px;
            border-bottom: 1px dotted #eee;
          }
          .receipt-table .quantity {
            text-align: center;
            width: 20%;
          }
          .receipt-table .price {
            text-align: right;
            width: 20%;
          }
          .receipt-table .total {
            text-align: right;
            width: 20%;
          }
          .item-description {
            font-style: italic;
            color: #666;
            font-size: 9px;
            padding-left: 5px;
          }
          .receipt-total {
            margin: 15px 0;
            text-align: right;
            font-weight: bold;
            font-size: 14px;
          }
          .thank-you {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            padding-top: 10px;
            border-top: 1px dotted #ccc;
          }
          .footer-note {
            margin-top: 15px;
            text-align: center;
            font-size: 9px;
            color: #666;
          }
        </style>
        
        <div class="receipt-container">
          <div class="receipt-header">
            <div class="receipt-title">TASTY BITES</div>
            <div class="restaurant-info">123 Food Street, Cuisine City</div>
            <div class="restaurant-info">Tel: (123) 456-7890</div>
            <div class="restaurant-info">www.TastyBites.com</div>
            <img src="/product_img/icon/line.jpg" alt="LINE QR Code" class="qr-code" style="filter: blur(2px);">
            <div class="connect-line">Connect with us on LINE</div>
          </div>
          
          <div class="receipt-details">
            <div><span class="bold">Order Date:</span> ${formattedDate}</div>
            <div><span class="bold">Order #:</span> ${orderNumber}</div>
          </div>
          
          <div class="receipt-title" style="font-size: 14px;">Order Receipt</div>
          
          <table class="receipt-table">
            <thead>
              <tr>
                <th>Product</th>
                <th class="quantity">Qty</th>
                <th class="price">Price</th>
                <th class="total">Total</th>
              </tr>
            </thead>
            <tbody>`;
    
    let totalPrice = 0;
    
    for (const productId in cart) {
      const item = cart[productId];
      const itemTotalPrice = item.quantity * item.price;
      
      receiptContent += `
              <tr>
                <td>
                  ${productId}
                  ${item.description ? `<div class="item-description">${item.description}</div>` : ''}
                </td>
                <td class="quantity">${item.quantity}</td>
                <td class="price">฿${item.price.toFixed(2)}</td>
                <td class="total">฿${itemTotalPrice.toFixed(2)}</td>
              </tr>`;
      
      totalPrice += itemTotalPrice;
    }
    
    receiptContent += `
            </tbody>
          </table>
          
          <div class="receipt-total">
            Total Price: ฿${totalPrice.toFixed(2)}
          </div>
          
          <div class="thank-you">
            Thank you for your order!
          </div>
          
        <div class="footer-note">
            Please keep this receipt for future reference.<br>
            We hope you enjoy your meal!<br>
            <small style="font-size: 8px; margin-top: 10px; display: block;">This is a student project for educational purposes only. Not affiliated with Katsuya or any real restaurant. All images are property of their respective owners.</small>
        </div>

        </div>
        `;
    
    return receiptContent;
  };
  
  // Calculate the total price of items in the cart
  export const calculateTotalPrice = (cart) => {
    return Object.values(cart).reduce(
      (total, item) => total + item.quantity * item.price, 
      0
    );
  };
  
  // Print receipt in a new window
  export const printReceipt = (cart) => {
    if (Object.keys(cart).length === 0) {
      return { success: false, error: 'Empty cart' };
    }
    
    const content = generateCartReceipt(cart);
    
    try {
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        throw new Error("Could not open print window");
      }
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>TASTY BITES - Order Receipt</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>${content}</body>
        </html>
      `);
      
      printWindow.document.close();
      
      setTimeout(() => {
        printWindow.print();
      }, 500);
      
      return { success: true };
    } catch (error) {
      console.error("Error printing receipt:", error);
      return { success: false, error: error.message };
    }
  };