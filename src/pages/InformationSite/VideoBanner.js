import React from "react";
import "./VideoBanner.css";

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video className="video-bg" autoPlay muted loop playsInline>
        <source src="/PYouth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay" />

      <div className="banner-content">
        <h1>Delivering Trusted<br />Medicines</h1>
        <button className="cta-button">Discover More</button>
      </div>
    </div>
  );
};

export default VideoBanner;
