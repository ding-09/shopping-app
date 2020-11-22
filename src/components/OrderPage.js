import React from 'react';
import OrderInfo from './OrderInfo';
import Food from './Food';
import Drinks from './Drinks';

function OrderPage() {
  return (
    <div className="order-page">
      <OrderInfo />
      <Food />
      <Drinks />
    </div>
  );
}

export default OrderPage;
