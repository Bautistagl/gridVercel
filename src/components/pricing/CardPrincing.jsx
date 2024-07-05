import React from 'react';

const CardPricing = ({ planType, price, description, features, className }) => {
  return (
    <div className={`pricing-card ${planType} ${className}`}>
      <h2>{planType}</h2>
      <h1>
        ${price}
        <span>/ per month</span>
      </h1>
      <h3>{description}</h3>
      <p> Plus everything in Free</p>
      <p> Up to 10 users</p>
      <p> Preview Environments</p>
      <p> Alerts (Slack + Email)</p>
      <button
        className={`button-pricing ${
          planType === 'team' ? 'button-pricing2' : ''
        }`}>
        SELECT
      </button>
    </div>
  );
};

export default CardPricing;
