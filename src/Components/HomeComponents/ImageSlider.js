import React, { useState, useEffect } from 'react';
import photoOne from "../../assets/hero-page/DSC_1830.webp";
import photoTwo from "../../assets/hero-page/DSC_5793.webp";
import photoThree from "../../assets/hero-page/DSC_7725-2.webp";
import photoFour from "../../assets/hero-page/DSC_8392.webp";
import photoOneMobile from "../../assets/hero-page/DSC_1830-2.webp";
import photoTwoMobile from "../../assets/hero-page/DSC_5793-2.webp";
import photoThreeMobile from "../../assets/hero-page/DSC_7725-2-2.webp";
import photoFourMobile from "../../assets/hero-page/DSC_8392-2.webp";
import { Helmet } from 'react-helmet';

const ImageSlider = () => {
  const images = [
    photoOne,
    photoTwo,
    photoFour,
    photoThree
    
  ];
  const imagesMobile = [
    photoOneMobile,
    photoTwoMobile,
    photoFourMobile,
    photoThreeMobile
    
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <>
    <Helmet>
        <link rel="preload" as="image" href={images[currentImageIndex]} />
        <link rel="preload" as="image" href={imagesMobile[currentImageIndex]} />
      </Helmet>
    <section className="hero-slider">
      <img className='image-slider desktop' src={images[currentImageIndex]} alt="Vancouver photographer portfolio"/>
      <img className='image-slider mobile' src={imagesMobile[currentImageIndex]} alt="Vancouver photographer portfolio"/>
    </section>
    </>
  );
};

export default ImageSlider;

