import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

const slides = [
  {
    title: 'Empowering Better Health',
    image: '/Slider5.png',
    link: '#',
  },
  {
    title: 'Delivering Trusted Medicines',
    image: '/Slider6.png',
    link: '#',
  },
  {
    title: 'Connecting Care & Innovation',
    image: '/Slider7.png',
    link: '#',
  },
];

const PharmaYouthSlider = () => {
  const [index, setIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const slideRef = useRef(null);
  const totalSlides = slides.length;

  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      // hide text before changing
      setTextVisible(false);
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setTextVisible(true);
      }, 50);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === totalSlides) {
      // Delay matches transition time
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'none';
          setIndex(0);
          setTimeout(() => {
            if (slideRef.current) {
              slideRef.current.style.transition = 'transform 1s ease-in-out';
            }
          }, 50);
        }
      }, 1000);
    }
  }, [index, totalSlides]);

  return (
    <div className="pharmayouth-slider">
      <div
        className="slides-wrapper"
        ref={slideRef}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {extendedSlides.map((slide, i) => (
          <div className="slide" key={i}>
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="slide-overlay"></div>
            {i === index && (
              <div className={`slide-content ${textVisible ? 'rise-in' : ''}`}>
                <h1>{slide.title}</h1>
                <a href={slide.link} className="discover-btn">
                  Discover More
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmaYouthSlider;
