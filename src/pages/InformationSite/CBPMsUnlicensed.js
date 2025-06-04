import React, { useState } from 'react';
import './CBPMsUnlicensed.css';

const CBPMs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="cbpm-container">
      <div className="cbpm-banner">
        <h1>CBPMs and Unlicensed  <br />Medicines</h1>
      </div>

      <div className="cbpm-text-section">
        <p>
          At any time, around the world, there are millions of patients with unmet medical needs.
          Unlicensed medicines are those sourced specifically for patients for whom there are no
          suitable licensed medication – either because existing formulations or presentations are
          unsuitable or because, for some reason, a licensed medication is not available in his or her location.
        </p>

        <div className="dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown(0)}>
            <h3>Unsuitable formulations or Dosage form</h3>
            <span>{openIndex === 0 ? '-' : '+'}</span>
          </div>
          {openIndex === 0 && (
            <div className="dropdown-content">
              <p>
                This includes patients who cannot swallow tablets, need different routes of administration, 
                or require non-standard strengths.
              </p>
            </div>
          )}
        </div>

        <div className="dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown(1)}>
            <h3>Location or Availability</h3>
            <span>{openIndex === 1 ? '-' : '+'}</span>
          </div>
          {openIndex === 1 && (
            <div className="dropdown-content">
              <p>
                Sometimes a licensed medicine is not available in a particular country or may be temporarily out of stock. 
                In such cases, an unlicensed version may be provided to ensure continued care.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CBPMs;
