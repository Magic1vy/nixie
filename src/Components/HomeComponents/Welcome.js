import React from "react";
import logo from "../../assets/hero-page/logo.png";
import photoOne from "../../assets/hero-page/DSC_7071-1-01.webp";
import photoTwo from "../../assets/hero-page/561.webp";
import photoThree from "../../assets/hero-page/DSC_0086-1.webp";
import arrow from "../../assets/hero-page/arrow.png";
import bookingImg from "../../assets/hero-page/booking.png";
import line from "../../assets/hero-page/line.png";
import { useNavigate } from 'react-router';

const Welcome = () => {
    const navigate = useNavigate()
    return(
        <section className="welcome-component">
            <section className="logo-container">
                <img className="logo" src={logo} alt="Vancouver photographer logo Nixie" />
            </section>
            <section>
                <p className="text">Welcome to my world of captivating moments and visual stories!</p>
                <p className="text">I am Elena a passionate photographer based in Vancouver and Toronto, dedicated to capturing the essence of life through my lens. With a keen eye for detail and a deep appreciation for beauty, I strive to create stunning images that speak to the soul. Whether it's the raw emotions of a wedding day in Vancouver, the grace and strength of a dancer, or the delicate innocence of a newborn, I am here to freeze those precious moments in time.</p>
                <p className="text">Explore my portfolio of Vancouver and Toronto photography and let my photographs transport you to a world of artistry and emotion from Canada's most iconic cities. Together, let's create memories in that will be cherished forever.</p>
            </section>
            <section>
                <div className="photo-container">
                    <img className="family-img" src={photoOne} alt="Vancouver family phootoshoot" loading="lazy" width="auto" height="auto"/>
                    <img className="man-img" src={photoTwo} alt="Vancouver women's phootoshoot" loading="lazy" width="auto" height="auto"/>
                    <img className="woman-img" src={photoThree} alt="Vancouver men's photoshoot" loading="lazy" width="auto" height="auto"/>
                    <div className="btn-cta rotation-container" onClick={() => navigate('/contacts')}>
                        <img className="booking-img" src={bookingImg} alt="" />
                        <img className="arrow-img" src={arrow} alt="" />
                    </div>
                    <img className="line" src={line} alt="" width="2px" height="100px"/>
                    <p className="phrase">"<b><em>Photography</em></b> is a way of feeling, of touching, of loving. What you have caught on film is captured <b><em>forever</em></b>... It remembers little things, long after you have forgotten <b><em>everything</em></b>." <br/> <br/> - <b>Aaron Siskind</b></p>
                    <img className="line2" src={line} alt="" width="2px" height="100px"/>
                </div>  
            </section>
        </section>
    )
}
export default Welcome;