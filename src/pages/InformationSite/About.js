import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Banner */}
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1>Profile & Mission</h1>
        </div>
      </div>

      {/* Content */}
      <div className="about-content">
        <h2>
          PharmaYouth is an independent international pharmaceutical services company
          operating in three main areas: Unlicensed medicines (Unlicensed Imports and Specials),
          Clinical Trials and Special Obtains.
        </h2>
        <p>
          We are a leading pharmaceutical provider with the capability to supply
          a wide range of branded and unlicensed medicines, including clinical trial
          comparators and specials. Our mission is to ensure continuous access
          to quality medicines through a strong global sourcing network and trusted
          manufacturer partnerships.
        </p>
      </div>


<div className="about-helping-banner">
  <div className="helping-overlay">
    <div className="helping-content">
      <h2>Helping you globally</h2>
      <p>
        PharmaYouth provides quality assured, compliant, ethical and timely access to treatment
        for patients with unmet medical needs, all around the world.
      </p>
      <p>
        Our global manufacturing, sourcing and distribution capability delivers unlicensed medicines
        as well as hard to find licensed medicines and medical devices not stocked by mainstream wholesalers.
        We also support clinical trials with the provision of Investigational Medicinal Product and
        comparators worldwide.
      </p>
    </div>
  </div>
</div>


    </div>



  );
};

export default AboutPage;
