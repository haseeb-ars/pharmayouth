import React from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  return (
    <div className="about-pharmacy">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Welcome to Pharmayouth Pharmacy</h1>
          <p>
           At Pharmayouth, we are redefining what it means to be a modern pharmacy. With a focus on accessible care, expert guidance, and innovative therapies, we provide everything from everyday prescriptions to specialized health solutions — including medical cannabis support.
          </p>
        </div>
      </section>

      <section className="about-details">
        <div className="about-details-content">
          <p>
            The medical cannabis pathway involves several steps to ensure patient safety and suitability. First, patients undergo a consultation with a specialist who reviews their medical history and treatment options. If approved, a prescription is issued and forwarded to a registered dispensing pharmacy — like Pharmayouth. We handle the supply, quality assurance, and patient education process, including how to use the product, store it properly, and manage side effects if they arise.
          </p>
          <p>
           All medical cannabis products dispensed by Pharmayouth are sourced from licensed producers and rigorously tested for purity, potency, and safety. We comply with MHRA and Home Office regulations to ensure full legal and medical compliance. Whether in oil, capsule, or dried flower form, every product comes with batch-level traceability and clear usage instructions.
          </p>
        </div>
      </section>

 <div className="pharmacy-expert-section">
      <div className="expert-image">
        <img
          src="/PCBD.jpg"
          alt="Pharmacist packaging medicine"
        />
      </div>
      <div className="expert-text">
        <h2>Trusted Expertise, <br />Personalised Care</h2>
        <p>
At Pharmayouth, we believe every patient deserves more than just a prescription — they deserve expert care, empathy, and clear guidance. Our pharmacy was founded with a strong belief in the therapeutic potential of medical cannabis, and we work closely with patients and healthcare professionals to make this emerging treatment more accessible.        </p>
        <p>
From your first consultation to ongoing support, we provide personalised advice and a smooth, reliable dispensing experience. Our focus is on safety, professionalism, and building trusted relationships that support better health outcomes.

        </p>
      </div>
    </div>

<div className="gphc-section">
  <div className="gphc-item">
    <h3>GPhC Registered Owner</h3>
    <p>Pharmayouth</p>
  </div>

  <div className="gphc-item">
    <h3>GPhC Registration Number</h3>
    <p>9010995</p>
  </div>

  <div className="gphc-item">
    <h3>GPhC Pharmacy Address &<br />Prescription Supplier</h3>
    <p>Unit 1 27A Banastre Road<br />Southport PR8 5AW</p>
  </div>

  <div className="gphc-item">
    <h3>Pharmacy Manager &<br />Superintendent Pharmacist</h3>
    <p>Mehraan Sattar</p>
  </div>
</div>


    </div>
  );
};

export default Pharmacy;
