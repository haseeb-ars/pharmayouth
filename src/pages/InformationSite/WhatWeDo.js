import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <div className="what-we-do-page">
      {/* Banner Section */}
      <div className="what-we-do-banner">
        <div className="overlay">
          <h1>WHAT WE DO</h1>
        </div>
      </div>

      {/* Main Text Content */}
      <div className="what-we-do-content">
        <h2>At any time, around the world, there are millions of patients with unmet medical needs.</h2>
        <p>
          Unlicensed medicines are those sourced specifically for patients for whom there are no suitable
          licensed medication – either because existing formulations or presentations are unsuitable or
          because, for some reason, a licensed medication is not available in his or her location.
        </p>

        <h3>Unsuitable formulations or Dosage form</h3>
        <p>
          These medicines are prepared in special strengths, formulations, or delivery methods to match
          the patient’s exact needs where standard options are not effective or available.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
