import React from "react";
import { useNavigate } from 'react-router';
import arrow from ".././assets/hero-page/arrow.png";
import one from "../assets/how-it-works/one.png";
import two from "../assets/how-it-works/two.png";
import three from "../assets/how-it-works/three.png";
import four from "../assets/how-it-works/four.png";
import five from "../assets/how-it-works/five.png";
import six from "../assets/how-it-works/six.png";
import bookConsultation from "../assets/how-it-works/book-consultation.png";
import Footer from "./Footer";
import HowItWorksContact from "./HowItWorksContact";
import ScrollToTopButton from "./ ScrollToTopButton";

function HowItWorks() {
    const navigate = useNavigate();

    return (
        <div className="how-it-works-component">
            <h1 className="heading">How it works</h1>
            <ScrollToTopButton />
            <div className="works-steps">
                <div className="works-steps-container">
                    <div className="step-container-odd">
                    <img className="steps-number" src={one} alt="number one" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Consultation & Wardrobe Selection</h3>
                        <p className="text">We'll start with a personalized consultation to understand your vision and style. Together, we'll curate the perfect wardrobe that complements your concept and brings out your unique personality. </p>
                    </div>
                    </div>
                    <div className="btn-cta rotation-container works-btn" onClick={() => navigate('/contacts')}>
                        <img className="see-more-img" src={bookConsultation} alt="text see more"/>
                        <img className="arrow-img" src={arrow} alt="arrow"/>
                    </div>
                </div>

                <div className="step-container-even">
                    <img className="steps-number" src={two} alt="number two" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Location Scouting</h3>
                        <p className="text">I'll scout for stunning locations that align with your desired theme, ensuring the perfect backdrop for your photoshoot. </p>
                    </div>
                </div>

                <div className="step-container-odd">
                    <img className="steps-number" src={three} alt="number three" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Preparation</h3>
                        <p className="text">Prior to the session, I'll provide guidance on grooming, posing, and any additional preparations needed to ensure you look and feel your best on the day of the shoot.</p>
                    </div>
                </div>

                <div className="step-container-even">
                    <img className="steps-number" src={four} alt="number four" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Capturing Moments</h3>
                        <p className="text">During the shoot, I'll create a relaxed and enjoyable atmosphere, guiding you through poses and capturing genuine emotions and expressions that tell your story. </p>
                    </div>
                </div>

                <div className="step-container-odd">
                    <img className="steps-number" src={five} alt="number five" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Editing & Post-Processing</h3>
                        <p className="text">Each photo will be meticulously edited, enhancing colors, refining details, and adding a touch of creative flair to bring out the best in every image. </p>
                    </div>
                </div>

                <div className="step-container-even">
                    <img className="steps-number" src={six} alt="number six" width="auto" height="auto"/>
                    <div className="steps-text">
                        <h3 className="steps-heading">Photo Delivery</h3>
                        <p className="text">Finally, I'll deliver a curated selection of beautifully edited photos that capture the essence of your shoot, allowing you to relive those precious moments for years to come. </p>
                    </div>
                </div>
            </div>
            <HowItWorksContact />
            <Footer />
        </div>
    )
}

export default HowItWorks;