import React from 'react'
import OrderSection from '../layout/OrderSection';
import ItemGrid from './ItemGrid';

function Drinks() {
    return (
        <div className="section-container">
            <OrderSection name="Drinks"/>
            <ItemGrid />
        </div>  
    )
}

export default Drinks
