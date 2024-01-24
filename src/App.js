import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Home from './Components/HomeComponents/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio/Portfolio';
import BoudoirPortfolio from './Components/Portfolio/BoudoirPortfolio';
import Pricing from './Components/PriceComponents/Pricing';
import HowItWorks from './Components/HowItWorks';
import Blog from './Components/Blog/Blog';
import Contacts from './Components/Contacts';
import facebook from "./assets/hero-page/facebook.png";
import instagram from "./assets/hero-page/instagram.png";
import PrivacyPolicy from './Components/PrivacyPolicy';
import ScrollToTop from './Components/ScrollToTop';
import CookieConsent from "react-cookie-consent";
import Cookies from 'js-cookie';
import TermsOfUse from './Components/TermsOfUse';
import NotFound from './Components/NotFound';
import ReviewsPage from './Components/ReviewsPage';



const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
    <CookieConsent
        location="bottom"
        buttonText="Agree All"
        declineButtonText="Decline All"
        cookieName="mySiteCookie"
        style={{ background: "rgb(114 89 44 / 97%)", justifyContent: "center", textAlign: "center" }}
        buttonStyle={{ color: "#000000", fontSize: "13px", background: "linear-gradient(1turn,#d29f55,#fff)", padding: "10px 20px"}}
        declineButtonStyle={{ color: "#feefee", fontSize: "13px",  background: "initial", border: '1px solid #d2a055be',  padding: "10px 20px"  }} 
        expires={150}
        enableDeclineButton
        onAccept={() => {
          Cookies.set('userConsent', 'true', { expires: 150 }); 
        }}
        onDecline={() => {
          Cookies.set('userConsent', 'false', { expires: 150 }); 
        }}
      >
        This website uses cookies provided to enhance user experience and analyze performance and traffic
        on our website. <a className='rights-link' href="/privacy-policy">Learn more about gathering information.</a>
      </CookieConsent>

    <Router>
      <ScrollToTop />
      <>
        <div className="App">
          <header>
            <div className="social-icons">
              <a href="https://www.instagram.com/nixie.photo" aria-label="link to instagram">
                <img className='hero-icons' src={instagram} alt="instagram"/>
                </a>
              <a href="https://www.facebook.com/profile.php?id=100001536040964"  aria-label="link to facebook">
                <img className='hero-icons' src={facebook} alt="facebook" />
                </a>
            </div>
            <div>
              <h1 className='main-heading'>Nixie photo</h1>
            </div>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onMouseDown={toggleMenu}>
      <div className="hamburger">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </div>
    </div>
          </header>
          <nav ref={menuRef} className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
              <li><Link to="/pricing" onClick={toggleMenu}>Pricing</Link></li>
              <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
              <li><Link to="/how-it-works" onClick={toggleMenu}>How it works</Link></li>
              <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
              <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/boudoir" element={<BoudoirPortfolio />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </>
    </Router>
    </>
  );
};

export default App;
