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
          PharmaYouth Ltd is a fully licensed and regulated pharmaceutical wholesaler based at a secure, MHRA-approved facility in Merseyside. We hold a Wholesale Distribution Authorisation (WDA(H)), a Manufacturer’s “Specials” Licence (MS), and a Home Office Controlled Drug Licence, enabling us to specialise in the importation, storage, distribution and export of a wide range of medicinal products, including Licenced products, Cannabis-Based Products for Medicinal Use (CBPMs), and other unlicensed “specials”.
        </h2>
        <p>
         <strong>Founders' Expertise </strong><br></br>
 PharmaYouth is founded and led by two highly experienced professionals:<br></br>
 Mr Hussain Abdeh – Co-Founder & Quality Director<br></br>
 Hussain has successfully led multiple MHRA inspections, implemented end-to-end pharmaceutical quality systems, and served as Responsible Person (RP), Responsible Person (Import), and Head of Quality Control (QC) for various licensed facilities.<br></br>
 Mr Mehraan Sattar – Co-Founder & Director<br></br>
 With extensive experience in GDP compliance, regulatory affairs, and pharmaceutical distribution, Mehraan oversees the operational and compliance frameworks of PharmaYouth. He has led MHRA inspections, trained teams on regulatory standards, and managed product integrity across complex distribution chains. 
 Together, they bring a combined decade of experience in regulatory, operational, and leadership roles across the unlicensed medicines and CBPM sectors.
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


<div className="about-content">
        <h2>
What We Offer
PharmaYouth provides a comprehensive portfolio of pharmaceutical services tailored to meet regulatory, clinical, and supply chain needs across the UK and internationally. Our offerings include:        </h2>
        <p>
         <strong>Founders' Expertise </strong><br></br>
 PharmaYouth is founded and led by two highly experienced professionals:<br></br>
 <strong>Importation and Supply of Unlicensed Medicines (Specials)</strong><br></br>
Through our MS licence, we import unlicensed medicines from outside the EEA for use in the UK, subject to appropriate clinical justification.
 <br></br><strong>CBPM importation, Storage, and Distribution  </strong><br></br>
Licensed for the possession, storage, and distribution of controlled drugs, including cannabis-based products for medicinal use (CBPMs), with destruction supervised by authorised personnel.
        </p>
      </div>

    </div>



  );
};

export default AboutPage;
