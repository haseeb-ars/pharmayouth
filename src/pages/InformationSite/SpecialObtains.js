import React, { useState } from 'react';
import './SpecialObtains.css';

const SpecialObtains = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div className="special-obtains-page">
      <div className="special-banner">
        <div className="overlay">
          <h1>Special Obtains</h1>
        </div>
      </div>

      <div className="special-content">
        <p>
          Occasionally a patient will require an unusual, low volume or infrequently prescribed item that is listed in the Chemist & Druggist Directory or the Drug Tariff, but which is not readily available from mainline wholesalers.
          Our sourcing and procurement team maintain a global network of trusted suppliers so we can find and deliver a ‘special obtain’ to quickly and efficiently meet the patient’s need.
        </p>

        <div className="dropdowns">
          <div className="dropdown">
            <button onClick={() => setOpen1(!open1)} className="dropdown-btn">
              What qualifies as a special obtain?
            </button>
            {open1 && (
              <div className="dropdown-content">
                Items not available through mainline wholesalers but listed in national directories may qualify.
              </div>
            )}
          </div>

          <div className="dropdown">
            <button onClick={() => setOpen2(!open2)} className="dropdown-btn">
              How quickly can we deliver?
            </button>
            {open2 && (
              <div className="dropdown-content">
                Delivery timelines depend on sourcing location, but we aim for same-day or next-day dispatch.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialObtains;
