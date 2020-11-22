import React from 'react'
import OrderSection from '../layout/OrderSection';
import ItemGrid from './ItemGrid';


function Food() {
    return (
        <div className="section-container">
            <OrderSection name="Food" />
            <ItemGrid />
        </div>
    )
}

export default Food;
