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
        <p>Your health deserves the highest standard of care. That’s why we’re committed to delivering only trusted, clinically approved medicines, including medical cannabis straight to your door with efficiency and discretion.
</p>
        
      </div>
    </div>
  );
};

export default VideoBanner;
