import React from "react";
import logo from "../assets/hero-page/logo.png";
import { useNavigate } from 'react-router';
import facebook from "../assets/footer/footer-facebook.png";
import instagram from "../assets/footer/footer-instagram.png";
import email from "../assets/footer/footer-mail.png";
import phone from "../assets/footer/footer-phone.png";

function Footer (){
    const navigate = useNavigate()

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    return(

        <footer>
            <section className="footer">
            <section>
                <img onClick={scrollToTop} className="footer-logo" src={logo} alt="Vancouver photographer Nixie logo"/>
            </section>
            <nav>
                <button className="footer-btn" onClick={() => navigate('/')}>Home</button> 
                <button className="footer-btn"  onClick={() => navigate('/about')}>About</button>
                <button className="footer-btn"  onClick={() => navigate('/portfolio')}>Portfolio</button> 
                <button className="footer-btn"  onClick={() => navigate('/pricing')}>Pricing</button>
                <button className="footer-btn"  onClick={() => navigate('/reviews')}>Reviews</button>
                <button className="footer-btn"  onClick={() => navigate('/how-it-works')}>How it works</button>
                <button className="footer-btn"  onClick={() => navigate('/blog')}>Blog</button>
                <button className="footer-btn"  onClick={() => navigate('/contacts')}>Contacts</button>
                <button className="footer-btn"  onClick={() => navigate('/privacy-policy')}>Privacy Policy</button>
                <button className="footer-btn"  onClick={() => navigate('/terms-of-use')}>Terms Of Use</button>
            </nav>
            <section className="footer-social-icon">
                <a href="mailto:info@nixie-photo.com" >
                    <img className="footer-icon email-icon" src={email} alt="email icon" title="info@nixie-photo.com"/>
                </a>
                <a href="tel:+16478039613">
                    <img className="footer-icon"src={phone} alt="phone icon" title="(647) 803-9613"/>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100001536040964' target="_blank" rel="noreferrer">
                    <img className="footer-icon" src={facebook} alt="facebook icon" title="Elena Dimarezkaya"/>
                </a>
                <a href='https://www.instagram.com/nixie.photo' target="_blank" rel="noreferrer">
                    <img className="footer-icon" src={instagram} alt="instagram icon" title="@nixie.photo"/>
                </a>
            </section>
            </section>
            <section>
                <p className="rights">&copy; 2024 Nixie Photo. All rights reserved. Website development by <a href='https://valeriia-code.com/' target="_blank" rel="noreferrer">Valeriia Code</a></p>
            </section>
        </footer>
    )
}
export default Footer;
