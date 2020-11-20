import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function ShoppingCart() {
  return (
    <div className="shopping-cart-container">
      <button className="shopping-cart-btn">
        <span className="cart-icon">
          <FaShoppingCart />
        </span>
        <span>|</span>
        <span>0 Items</span>
      </button>
    </div>
  );
}

export default ShoppingCart;
