import React from "react";
import facebook from "../assets/footer/footer-facebook.png";
import instagram from "../assets/footer/footer-instagram.png";
import email from "../assets/footer/footer-mail.png";
import phone from "../assets/footer/footer-phone.png";
import location from "../assets/location.png";
import avatar from "../assets/IMG_1258.jpg"
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import ScrollToTopButton from "./ ScrollToTopButton";

function Contacts (){
    return(
        <>
            <h1 className="heading">Contacts</h1>
            <ScrollToTopButton />
            <section className="contacts-component">
            <section className="container-contacts">
                <div className="contact">
                    <a href="mailto:nixie.photo13@gmail.com" >
                        <img className="contacts-icon email-icon" src={email} alt="email icon" width="auto" height="auto"/>
                    </a>
                    <a href="mailto:nixie.photo13@gmail.com" className="text-contact">info@nixie-photo.com</a>
                </div>
                <div className="contact">
                    <a href="tel:+16478039613">
                        <img className="contacts-icon" src={phone} alt="phone icon" width="auto" height="auto"/>
                    </a>
                    <a href="tel:+16478039613" className="text-contact">+1 (647) 803-9613</a>
                </div>
                <div className="contact">
                    <a href='https://www.facebook.com/profile.php?id=100001536040964' target="_blank" rel="noreferrer">
                        <img className="contacts-icon" src={facebook} alt="facebook icon" width="auto" height="auto"/>
                    </a>
                    <a href='https://www.facebook.com/profile.php?id=100001536040964' className="text-contact">Elena Dimarezkaya</a>
                </div>
                <div className="contact">
                    <a href='https://www.instagram.com/nixie.photo' target="_blank" rel="noreferrer">
                        <img className="contacts-icon" src={instagram} alt="instagram icon" width="auto" height="auto"/>
                    </a>
                    <a href="https://www.instagram.com/nixie.photo" className="text-contact">@nixie.photo</a>
                </div>
                <div className="contact">
                        <img className="contacts-icon location-icon" src={location} alt="Vancouver icon" width="auto" height="auto"/>
                        <span className="text-contact">Vancouver, BC  Canada</span>
                </div>
                <div className="contact">
                        <img className="contacts-icon location-icon" src={location} alt="Toronto icon" width="auto" height="auto"/>
                        <span className="text-contact">Toronto, ON  Canada</span>
                </div>
            </section>
            <img className="contact-avatar" src={avatar} alt="Vancouver Photographer Elena Dimarezkaya" width="auto" height="auto"/>
            </section>
            <ContactForm />
            <Footer />
        </>
    )
}
export default Contacts;