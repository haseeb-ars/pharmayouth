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


 <h2>Meeting Unmet Medical Needs with Unlicensed Medicines</h2>
        <p>
      Around the world, millions of patients face challenges due to the unavailability of suitable licensed medications. Unlicensed medicines are specially sourced to address cases where existing treatments are either inappropriate for a patient’s specific needs or simply inaccessible in a given location.
        </p>
 <p>
  <h3>Why Licensed Medicines May Be Inappropriate</h3>
Licensed medicines may sometimes be unsuitable due to patient-specific needs such as allergies, difficulty swallowing, unpleasant taste, or inappropriate strengths—especially in children, the elderly, or those with rare conditions. At PharmaYouth, we ethically source unlicensed medicines to bridge access gaps caused by shortages, discontinuations, or delays in global availability. Operating under strict regulatory frameworks, we prioritize licensed alternatives first, and when unavailable, we offer tailored unlicensed solutions. With global sourcing, English-language labeling, and a full range of dosage forms, we support healthcare providers in delivering timely, compliant, and patient-centered care.


<h3>Following guidance from the Royal Pharmaceutical Society, our primary approach is always to identify and supply a suitable licensed product. If no licensed option exists, we move forward with sourcing an unlicensed medicine tailored to the patient’s requirements.</h3>

PharmaYouth offers robust global sourcing capabilities to address cases where a prescribed medicine is not licensed in the UK. By leveraging an extensive international supplier network, we identify and import approved alternatives under UK unlicensed use regulations to ensure timely patient access. To support safe and effective use, we provide English-language labeling and translated patient information leaflets. Additionally, with both a Wholesale Dealer’s License and a Wholesale Distribution Authorisation (Human), PharmaYouth supplies a broad range of unlicensed medicines, including sterile and non-sterile forms (oral liquids, eye drops, ointments), oral solids (tablets and capsules), and specialty formats such as nasal sprays, suppositories, and rectal preparations.
        </p>

        <h2>Cannabis-Based Products for Medicinal Use (CBPMs)</h2>
        <p>
PharmaYouth supports the ethical and regulatory-compliant supply of Cannabis-Based Products for Medicinal Use (CBPMs) in the UK. These products may be prescribed by specialist consultants for patients with conditions where licensed alternatives are unsuitable or ineffective, including epilepsy, chronic pain, multiple sclerosis, and chemotherapy-induced nausea.

        </p>

        <div className="dropdown">
          <div className="dropdown-header" onClick={() => toggleDropdown(0)}>
            <h3>CBPMs fall under a tightly controlled framework, and PharmaYouth ensures:</h3>
            <span>{openIndex === 0 ? '-' : '+'}</span>
          </div>
          {openIndex === 0 && (
            <div className="dropdown-content">
              <p>
               1. Access to a trusted international network of approved CBPM manufacturers and suppliers <br></br>

2. Full compliance with UK regulations, including Home Office licensing<br></br>

3. Secure importation, storage, and distribution processes<br></br>

4. Support for healthcare providers and patients in navigating regulatory and clinical aspects of CBPM prescribing<br></br>

5. Clear labelling and patient information in accordance with MHRA and Home Office guidelines<br></br>

6. Through our CBPM service, we aim to give eligible patients access to consistent, quality-assured medicinal cannabis products when no licensed treatments are appropriate.<br></br>

7. Through our commitment to quality, safety, and compliance, PharmaYouth ensures that patients receive the treatment they need — even when licensed options fall short.<br></br>

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
<h2 className='getintouch'>Get in Touch</h2>
<p>Need help with importing or exporting pharmaceuticals?<br></br>
Contact our expert team today for regulatory guidance, quotations, or product availability.<br></br>
📧 <strong>Email:</strong> info@pharmayouth.com<br></br>
🌍 Worldwide Coverage | GDP Compliant | Fast Turnaround</p>
        
      </div>


    </div>
  );
};

export default CBPMs;
