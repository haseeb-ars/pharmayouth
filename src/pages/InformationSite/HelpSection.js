import React, { useEffect, useRef } from 'react';
import './HelpSection.css';

const HelpSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('rise-up');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const boxes = [
    {
      title: 'Wholesale Pharmaceuticals',
      image: '/what1.jpg',
      desc: 'Supplying licensed medicines to pharmacies, clinics, and hospitals with a focus on reliability and compliance.',
    },
    {
      title: 'Import',
      image: '/What2.jpg',
      desc: 'Importing hard-to-source or out-of-stock medicines globally to ensure continuous treatment for patients.',
    },
    {
      title: 'Specials / Unlicensed Meds',
      image: '/What3.jpg',
      desc: 'Providing bespoke, patient-specific unlicensed medicines that meet exact formulation and dosage needs.',
    },
    {
      title: "CBPM's",
      image: '/What4.jpg',
      desc: 'Facilitating access to Cannabis-Based Products for Medicinal Use (CBPMs) in line with UK regulatory frameworks.',
    },
    {
      title: 'Special Obtains',
      image: '/What5.jpg',
      desc: 'Sourcing exceptional or niche medicines not readily available through standard pharmaceutical channels.',
    },
  ];

  return (
    <div className="help-section-wrapper" ref={sectionRef}>
      <h2 className="help-title">What we do</h2>
      <div className="help-grid">
        {boxes.map((box, index) => (
          <div className="help-box" key={index}>
            <img src={box.image} alt={box.title} />
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSection;
