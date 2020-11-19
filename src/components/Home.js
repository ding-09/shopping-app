import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-container">
      <h1>What are you craving?</h1>
      <p>Food and drinks available for delivery and pickup.</p>
      <Link to="/order">
        <button className="order-btn">
          Order now<span className="order-btn-arrow">&#10230;</span>
        </button>
      </Link>
      <div className="home-image-container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/56c8157b1bbee09ef64fcabe/1579784341771-LJDQ9FNS8JN6RPB8SBQ2/ke17ZwdGBToddI8pDm48kNu93_l1Rc0JoXikXAEKHf17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmDJyaVitQ06bkWUY0OMxkmN-bdz7wg8la12Me-ub45vBE5029s6uMXtkNCzVgxK8m/TACO+FOOD+PHOTOGRAPHER+AUSTRALIA.jpg?format=1000w"
          alt="food"
        ></img>
      </div>
    </div>
  );
}

export default Home;
