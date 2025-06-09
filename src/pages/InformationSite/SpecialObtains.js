import React, { useState } from 'react';
import './SpecialObtains.css';

const SpecialObtains = () => {
  const [open1, setOpen1] = useState(false);

  return (
    <div className="special-obtains-page">
      <div className="special-banner">
        <div className="overlay">
          <h1>Special Obtains</h1>
        </div>
      </div>

      <div className="special-content">
        <h2>Hard-to-Find Items Sourced with Speed and Precision</h2>
        <p>
         Sometimes patients require low-volume, infrequently prescribed, or niche products listed in the Drug Tariff or Chemist & Druggist Directory that are not readily available through mainstream wholesalers. At PharmaYouth, our specialist sourcing and procurement team works through a global network of trusted suppliers to locate and deliver these "special obtains" with efficiency and care.
        </p>
      <strong>Simplifying Access to Rare and Specialist Items</strong>
<p>Our Special Obtains Service eliminates the need for pharmacies and healthcare providers to open and manage rarely used supplier accounts. We handle the legwork—so your team can focus on patient care, not procurement.</p>
<p>PharmaYouth specializes in sourcing hard-to-obtain medicines that are often unavailable through standard wholesale channels. Our fulfillment process is fast and dependable, with most items delivered within 3–5 working days. For urgent patient needs, we also offer expedited delivery options to ensure timely access to critical treatments.</p>

        <div className="dropdowns">
          <div className="dropdown">
            <button onClick={() => setOpen1(!open1)} className="dropdown-btn">
              What We Can Source?
            </button>
            {open1 && (
              <div className="dropdown-content">
                We supply both licensed medicines and an extensive range of medical devices, appliances, specialist nutrition, and more. Here's just a snapshot of the categories we cover:
                <h3>Medical Devices & Appliances</h3>
<ul>
  <li>Colostomy and stoma care products</li>
  <li>Tracheostomy and urostomy supplies</li>
  <li>Incontinence products</li>
  <li>Mobility aids and disability support devices</li>
  <li>Blood pressure monitors and accessories</li>
  <li>Slings, dressings, and medical bandages</li>
</ul>

<h3>Dietary Foods & Nutritional Supplements</h3>
<ul>
  <li>Gluten-free and dairy-free foods</li>
  <li>Low-protein and specialist metabolic diets</li>
  <li>Vitamins, minerals, and nutritional supplements</li>
  <li>Homeopathic remedies</li>
</ul>

<h3>Healing & Wound Care</h3>
<ul>
  <li>Advanced wound care treatments</li>
  <li>Scarring management products</li>
  <li>Medical-grade cover creams</li>
</ul>

<h3>Therapeutic Clothing & Hosiery</h3>
<ul>
  <li>Dermatological garments (e.g. silk vests)</li>
  <li>Compression hosiery and wraps</li>
  <li>Custom-made hosiery to fit individual patient needs</li>
</ul>

              </div>
            )}
          </div>

<h2>A Service You Can Rely On</h2>
<p>If you're struggling to find a particular product to meet an unmet patient need, let PharmaYouth do the searching for you. Our experienced team understands the urgency and sensitivity involved in sourcing specialist items — and we're committed to fast, compliant, and reliable delivery.</p>
       
<h2>Get in Touch</h2>
<p>Need help with importing or exporting pharmaceuticals?<br></br>
Contact our expert team today for regulatory guidance, quotations, or product availability.<br></br>
📧 <strong>Email:</strong> info@pharmayouth.com<br></br>
🌍 Worldwide Coverage | GDP Compliant | Fast Turnaround</p>       
        </div>
      </div>
    </div>
  );
};

export default SpecialObtains;
