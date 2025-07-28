import './Home.css';
import HelpSection from './HelpSection';
import VideoBanner from './VideoBanner';

export default function Home() {
  return (
    <div className='Home'>

<VideoBanner />
<HelpSection />


<div className="why-choose-section">
  <h2>Why choose PharmaYouth?</h2>
  <div className="why-choose-grid">
    <div className="why-item">
      <img src="/approved.png" alt="Icon" />
      <div>
        <h3>WDA</h3>
        <p>Certified for full legal compliance</p>
      </div>
    </div>
    <div className="why-item">
      <img src="/export.png" alt="Icon" />
      <div>
        <h3>50+</h3>
        <p>Export destinations. Global reach for pharmacuiticals </p>
      </div>
    </div>
    <div className="why-item">
      <img src="/thc.png" alt="Icon" />
      <div>
        <h3>CBPMs</h3>
        <p>Licensing to facilitate Importation from countries such as Canada and the EU</p>
      </div>
    </div>
    <div className="why-item">
      <img src="/24-7.png" alt="Icon" />
      <div>
        <h3>Round the clock</h3>
        <p>Monitered security</p>
      </div>
    </div>
    <div className="why-item">
      <img src="/customer-service.png" alt="Icon" />
      <div>
        <h3>Highly experieced</h3>
        <p> Pharmaceutical team</p>
      </div>
    </div>
    <div className="why-item">
      <img src="/thermometer.png" alt="Icon" />
      <div>
        <h3>°C</h3>
        <p>Use approved temperature controlled couriers</p>
      </div>
    </div>
  </div>
</div>


{/*  
<div className="home-main">
  <div className="home-container">
    <div className="home-left">
      <h1>Communicate.<br />Collaborate.<br />Create.</h1>
      <p>PharmaYouth provides an effective and powerful way to manage your pharmacy needs.</p>
      <button className="get-started">Get Started</button>
    </div>
    <div className="home-right">
      <img src="/illustration.png" alt="illustration" />
    </div>
  </div>
</div>
*/}
{/* 
<div className="yellow-section">
  <div className="yellow-section-content">
    <div className="yellow-left">
      <h2>
        Empowering Healthcare,<br />
        Delivering Excellence<br />
        
      </h2>
    </div>
    <div className="yellow-right">
      <p>
        PharmaYouth is a trusted pharmaceutical wholesaler based in the UK, dedicated to supplying high-quality medicines and healthcare products to pharmacies, clinics, and healthcare providers nationwide. We combine deep industry knowledge with an agile supply chain to ensure timely, compliant, and cost-effective distribution.
      </p>
    </div>
  </div>
</div>

*/}

{/*
<section className="collab-section" id="about-section">
  <div className="collab-container">
    <div className="collab-left">
      <img src="/About.png" alt="Illustration" />
    </div>
    <div className="collab-right">
      <h2>Advancing Pharmacies,<br />Empowering Progress</h2>
      <p>
        PharmaYouth bridges the gap between modern pharmaceutical wholesalers and the next generation of healthcare providers. Our mission is to streamline access to essential products, boost collaboration, and support the future of pharmacy through technology, transparency, and trust. Whether you're stocking up or scaling up, PharmaYouth is your trusted partner in pharmaceutical growth.
      </p>

      <div className="collab-icons">
        <div className="icon-box">
          <img src="/1.png" alt="Toolkit" />
          <span>Smart Wholesale Solutions</span>
        </div>
        <div className="icon-box">
          <img src="/2.png" alt="File Sharing" />
          <span>Trusted Manufacturing Network</span>
        </div>
        <div className="icon-box">
          <img src="/3.png" alt="Design Freedom" />
          <span>Flexible & Future-Ready</span>
        </div>
      </div>
    </div>
  </div>
</section>
*/}


<div className="offer-section">
  <h2 className="offer-heading">What We Offer</h2>
  <p className="offer-description">
    PharmaYouth provides a wide range of branded and generic medicines, OTC products, specialist treatments, and medical devices—offering reliable, cost-effective solutions for exceptional patient care.
</p>

  <div className="offer-grid">
    <div className="offer-card">
      <img src="/1.jpeg" alt="Workflows That Work" />
      <h3>Branded<br />Pharmaceuticals</h3>
      <p>We supply a wide range of trusted branded medicines from leading manufacturers, ensuring high-quality treatment options for patients across various therapeutic areas.</p>
    </div>

    <div className="offer-card">
      <img src="/2.jpeg" alt="All-In-One Solution" />
      <h3>Generic<br />Medicines</h3>
      <p>Our extensive selection of cost-effective generic alternatives helps healthcare providers manage budgets without compromising on quality or patient care.</p>
    </div>

    <div className="offer-card">
      <img src="/3.jpeg" alt="Comprehensive Support" />
      <h3>Over-the-Counter (OTC)<br />Products</h3>
      <p>From pain relief to daily wellness, we offer a full spectrum of OTC products to support everyday healthcare needs in pharmacies and retail outlets.</p>
    </div>

    <div className="offer-card">
      <img src="/4.jpeg" alt="Smart Automation Tools" />
      <h3>Medical Devices<br />& Consumables</h3>
      <p>PharmaYouth also provides a reliable supply of essential medical devices and consumables, including PPE, diagnostic tools, and daily-use clinical supplies.</p>
    </div>
  </div>
</div>



    </div>

    
  );
}

