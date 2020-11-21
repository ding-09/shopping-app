import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  return (
    <div className="shopping-cart-container">
      <Link to="/checkout">
        <button className="shopping-cart-btn">
          <span className="cart-icon">
            <FaShoppingCart />
          </span>
          <span className="divider">|</span>
          <p className="items-amount">0 Items</p>
        </button>
      </Link>
    </div>
  );
}

export default ShoppingCart;
