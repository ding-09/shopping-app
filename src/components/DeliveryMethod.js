import React, { useEffect } from 'react';

function DeliveryMethod() {
  useEffect(() => {
    const bar = document.querySelector('.bar');
    const delivery = document.getElementById('delivery');
    const pickup = document.getElementById('pickup');

    pickup.addEventListener('click', () => {
      bar.classList.add('bar-animation');
    });

    delivery.addEventListener('click', () => {
      bar.classList.remove('bar-animation');
    });
  }, []);

  return (
    <>
      <div className="delivery-method">
        <p id="delivery">Delivery</p>
        <p id="or">or</p>
        <p id="pickup">Pickup</p>
      </div>
      <div className="bar"></div>
    </>
  );
}

export default DeliveryMethod;
