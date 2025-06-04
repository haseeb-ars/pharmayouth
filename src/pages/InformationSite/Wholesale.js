import React from 'react';
import './Wholesale.css';

const Wholesale = () => {
  return (
    <div className="wholesale-page">
      <div className="wholesale-banner">
        <div className="wholesale-overlay">
          <h1>Wholesalec</h1>
        </div>
      </div>

      <div className="wholesale-content">
        <h2>
          Get a wide range of affordable generic medicines at PharmaYouth!
        </h2>
        <p>
          We offer over <strong>1,500 generic medicines</strong> at competitive prices. This means
          you can find the medication you need at a price that fits your budget.
        </p>

        <ul>
          <li>Almost always have the medicine you need in stock</li>
          <li>Be among the first to offer new generic medications</li>
        </ul>

        <p>
          We clearly list the price of each generic medicine, making it easy to compare with other suppliers and make informed procurement decisions for your pharmacy or healthcare facility.
        </p>
      </div>
    </div>
  );
};

export default Wholesale;
