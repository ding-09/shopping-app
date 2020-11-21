import React from 'react';
import DeliveryMethod from './DeliveryMethod';
import ShoppingCart from './ShoppingCart';

function OrderInfo() {
  return (
    <div className="order-info">
      <DeliveryMethod />
      <ShoppingCart />
    </div>
  );
}

export default OrderInfo;
