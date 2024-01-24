import React, { useState, useRef } from "react"
import soloPhotoshoot from "../../assets/price/DSC_1151.jpg";
import familyPhotoshoot from "../../assets/price/DSC_3593.jpeg";
import boudoirPhotoshoot from "../../assets/price/DSC_5017.jpg";
import headshotPhotoshoot from "../../assets/price/DSC_8110-1.jpeg";
import soloPhotoshootMobile from "../../assets/price/DSC_3151-1.jpeg";
import familyPhotoshootMobile from "../../assets/price/DSC_4787.jpg";
import boudoirPhotoshootMobile from "../../assets/price/DSC_4920-1.jpg";
import headshotPhotoshootMobile from "../../assets/price/DSC_9171.jpg";
import { Accordion } from "./Accordion/Accordion";
import ContactForm from "../ContactForm";
import ModalSolo from "./Modals/ModalSolo";
import ContentSolo from "./Modals/ContentSolo";
import ModalBoudoir from "./Modals/ModalBoudoir";
import ContentBoudoir from "./Modals/ContentBoudoir";
import ModalHeadshot from "./Modals/ModalHeadshot";
import ContentHeadshot from "./Modals/ContentHeadshot";
import ModalFamily from "./Modals/ModalFamily";
import ContentFamily from "./Modals/ContentFamily";
import Footer from "../Footer";
import ScrollToTopButton from "../ ScrollToTopButton";

function Pricing (){

    const [isSoloOpen, setIsSoloOpen] = useState(false);
    const [isBoudoirOpen, setIsBoudoirOpen] = useState(false);
    const [isFamilyOpen, setIsFamilyOpen] = useState(false);
    const [isHeadshotOpen, setIsHeadshotOpen] = useState(false);
    const contactFormRef = useRef(null);

    const scrollToContactForm = () => { 
        contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <div>  
            <h1 className="heading">Pricing</h1>
            <ScrollToTopButton />
            <section  className="price-component">
                <div>
                <section className="price-card">
                    <img className="price-img desktop" src={soloPhotoshoot} alt="Vancouver individual photoshoot" width="auto" height="auto"/>
                    <img className="price-img mobile" src={soloPhotoshootMobile} alt="Vancouver individual photoshoot" width="auto" height="auto"/>
                    <section className="price-description">
                        <h3 className="price-header">Solo photoshoot</h3>
                        <p className="price">from <span>$350</span></p>
                        <ul className="price-list">
                            <li>1 hour</li>
                            <li>1 outfit</li>
                            <li>10 retouched photos</li>
                        </ul>
                        <div  className="btn-container">
                        <button className="btn-portfolio" onClick={scrollToContactForm}>Send a request</button>

                        <button className="btn-request"  onClick={ () => setIsSoloOpen(true)}>View more</button>
                            {isSoloOpen &&  
                                <ModalSolo setIsOpen={setIsSoloOpen} contactFormRef={contactFormRef}>
                                    <ContentSolo setIsOpen={setIsSoloOpen} />
                                </ModalSolo>
                            }
                        </div>
                    </section>
                </section>
                <section className="price-card">
                    <img className="price-img desktop"  src={boudoirPhotoshoot} alt="Vancouver boudoir photoshoot" width="auto" height="auto"/>
                    <img className="price-img mobile" src={boudoirPhotoshootMobile} alt="Vancouver boudoir photoshoot" width="auto" height="auto"/>
                    <section className="price-description">
                        <h3 className="price-header" >Boudoir</h3>
                        <p className="price">from <span>$500</span></p>
                        <ul className="price-list">
                            <li>1.5 hours</li>
                            <li>1 outfits</li>
                            <li>10 retouched photos</li>
                        </ul>
                        <div  className="btn-container">
                        <button className="btn-portfolio" onClick={scrollToContactForm}>Send a request</button>
                            <button className="btn-request"  onClick={ () => setIsBoudoirOpen(true)}>View more</button>
                            {isBoudoirOpen &&  
                                <ModalBoudoir setIsOpen={setIsBoudoirOpen} contactFormRef={contactFormRef}>
                                    <ContentBoudoir setIsOpen={setIsBoudoirOpen} />
                                </ModalBoudoir>
                            }
                        </div>
                    </section>
                </section>
                </div>
                <div>
                <section className="price-card">
                    <img className="price-img desktop"  src={familyPhotoshoot} alt="Vancouver family photoshoot" width="auto" height="auto"/>
                    <img className="price-img mobile" src={familyPhotoshootMobile} alt="Vancouver family photoshoot" loading="lazy" width="auto" height="auto"/>
                    <section className="price-description">
                        <h3 className="price-header" >Family photoshoot</h3>
                        <p className="price">from <span>$400</span></p>
                        <ul className="price-list">
                            <li>1 hour</li>
                            <li>1 outfit</li>
                            <li>10 retouched photos</li>
                        </ul>
                        <div  className="btn-container">
                        <button className="btn-portfolio" onClick={scrollToContactForm}>Send a request</button>
                        <button className="btn-request"  onClick={ () => setIsFamilyOpen(true)}>View more</button>
                            {isFamilyOpen &&  
                                <ModalFamily setIsOpen={setIsFamilyOpen} contactFormRef={contactFormRef}>
                                    <ContentFamily setIsOpen={setIsFamilyOpen} />
                                </ModalFamily>
                            }
                        </div>
                    </section>
                </section>
                <section className="price-card">
                    <img className="price-img desktop"  src={headshotPhotoshoot} alt="Vancouver headshot photoshoot" width="auto" height="auto"/>
                    <img className="price-img mobile" src={headshotPhotoshootMobile} alt="Vancouver headshot photoshoot" loading="lazy" width="auto" height="auto"/>
                    <section className="price-description">
                        <h3 className="price-header">Headshot</h3>
                        <p className="price">from <span>$350</span></p>
                        <ul className="price-list">
                            <li>30 min</li>
                            <li>1 outfit</li>
                            <li>10 retouched photos</li>
                        </ul>
                        <div  className="btn-container">
                        <button className="btn-portfolio" onClick={scrollToContactForm}>Send a request</button>
                        <button className="btn-request"  onClick={ () => setIsHeadshotOpen(true)}>View more</button>
                            {isHeadshotOpen &&  
                                <ModalHeadshot setIsOpen={setIsHeadshotOpen} contactFormRef={contactFormRef}>
                                    <ContentHeadshot setIsOpen={setIsHeadshotOpen} />
                                </ModalHeadshot>
                            }
                        </div>
                    </section>
                </section>
                </div>
            </section>

            <section className="price-component">
                    <p className="text other-types">Note: There are other types of photography available, such as events, love-story, weddings, cake smash, newborn, real estate, and more. For further details, please contact.</p>
            </section>

            <section className="schedule-shooting">
                <div className="schedule-shooting-text">
                    <p className="schedule-text">Schedule your shooting</p>
                    <p className="discount-text">Contact me now and get a 10% discount for the next photoshoot.</p>
                </div>
            </section>

            <Accordion />
            <ContactForm ref={contactFormRef}/>
            <Footer />
        </div>
    )
}
export default Pricing;