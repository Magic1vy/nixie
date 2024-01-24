import React from "react";
import arrow from "../../assets/hero-page/arrow.png";
import seeMore from "../../assets/hero-page/seeMore.png";
import soloOne from "../../assets/sessions/DSC_9802-1.webp";
import soloTwo from "../../assets/sessions/22-01.webp";
import familyOne from "../../assets/sessions/DSC_0747.webp";
import familyTwo from "../../assets/sessions/DSC_8484-1.webp";
import boudoirOne from "../../assets/sessions/82.webp";
import boudoirTwo from "../../assets/sessions/DSC_4964.webp";
import headshotOne from "../../assets/sessions/DSC_8883-2-2.webp";
import headshotTwo from "../../assets/sessions/DSC6584.webp";
import { useNavigate } from 'react-router';

const AboutSession = () =>{
    const navigate = useNavigate();


    return(
        <section className="about-sessions"> 
        <h2 className="heading">About photo sessions</h2>
            <section className="session-container">
                <section className="sessions-text desktop">
                    <h3 className="text-left">Solo photography session</h3>
                    <p className="sessions-text text-left">Indulge in an extraordinary individual photoshoot experience catered exclusively to you. Whether it's capturing your moments by the mesmerizing ocean, embracing a street-style vibe, immersing in the beauty of nature, or opting for a studio setting, my talent and camera will meticulously craft the perfect ambiance that complements your unique personality. With an unwavering focus on showcasing your individuality, let these remarkable images serve as timeless treasures, preserving the essence of who you are.</p>
                </section>
                <section className="container-img">
                    <img className="sessions-img down-img" src={soloOne} alt="Vancouver beautiful woman photoshoot" loading="lazy" width="auto" height="auto"/>
                    <div className="container-image-with-btn">
                        <img className="sessions-img" src={soloTwo} alt="Vancouver beautiful woman photoshoot" loading="lazy" width="auto" height="auto"/>
                        <div className="btn-cta rotation-container"  onClick={() => navigate(`/portfolio?filter=Solo`)}>
                            <img className="see-more-img" src={seeMore} alt=""/>
                            <img className="arrow-img" src={arrow} alt=""/>
                        </div>
                    </div>
                </section>
                <section className="sessions-text mobile">
                    <h3 className="text-left">Solo photography session</h3>
                    <p className="sessions-text text-left">Unleash your potential through the lens with an unparalleled photoshoot experience! Regardless of gender, my artistic sessions are crafted to capture the true you. Step into an arena of self-expression, where each snapshot weaves its own narrative. Together, we'll produce compelling visuals that echo your persona and applaud your distinctiveness. Guided by my artistic intuition and meticulous attention to detail, I'll steer you through this journey, seizing genuine moments that you'll treasure for a lifetime. Embrace your singularity and let's embark on this unique creative adventure, culminating in awe-inspiring images and indelible memories.</p>
                </section>
            </section>

            <section className="session-container">
            <section className="container-img">
                    <div className="container-image-with-btn">
                        <img className="sessions-img " src={familyOne} alt="Vancouver beautiful family photoshoot" loading="lazy" width="auto" height="auto"/>
                        <div className="btn-cta rotation-container"  onClick={() => navigate(`/portfolio?filter=Family`)}>
                            <img className="see-more-img" src={seeMore} alt=""/>
                            <img className="arrow-img" src={arrow} alt=""/>
                        </div>
                    </div>
                    <img className="sessions-img down-img" src={familyTwo} alt="Vancouver beautiful family photoshoot" loading="lazy" width="auto" height="auto"/>
                </section>
                <section  className="sessions-text">
                    <h3  className="text-right">Family</h3>
                    <p className="sessions-text text-right">Celebrate the joy of family and the miracle of motherhood with a heartfelt portrait session. Capture beautiful moments that tell your unique story. From tender maternity photos to cherished family memories, our session is tailored to your style and vision. Let us create timeless images filled with love, laughter, and genuine connections. Embrace the beauty of your family's journey and preserve it forever.</p>
                </section>
            </section>

            <section className="session-container">
                <section  className="sessions-text desktop">
                    <h3 className="text-left">Boudoir</h3>
                    <p className="sessions-text text-left">Discover your inner confidence and acknowledge your beauty through an enchanting boudoir photoshoot. Venture into a realm of sensuality and individuality, where each captured moment echoes your distinctive charm. Allow me to foster a safe and affirming environment, encouraging you to delve into your femininity and celebrate your uniqueness. Collaboratively, we'll craft mesmerizing, intimate imagery that spotlights your inner goddess. Embark on your journey of self-love, while I encapsulate the essence of your beauty with refined artistry.</p>
                </section>
                <section className="container-img">
                    <img className="sessions-img down-img" src={boudoirOne} alt="Vancouver boudoir photoshoot" loading="lazy" width="auto" height="auto"/>
                    <div className="container-image-with-btn">
                        <img className="sessions-img" src={boudoirTwo} alt="Vancouver boudoir photoshoot" loading="lazy"  width="auto" height="auto"/>
                        <div className="btn-cta rotation-container"  onClick={() => navigate('/boudoir')}>
                            <img className="see-more-img" src={seeMore} alt=""/>
                            <img className="arrow-img" src={arrow} alt=""/>
                        </div>
                    </div>
                </section>
                <section  className="sessions-text mobile">
                    <h3 className="text-left">Boudoir</h3>
                    <p className="sessions-text text-left">Discover your inner confidence and acknowledge your beauty through an enchanting boudoir photoshoot. Venture into a realm of sensuality and individuality, where each captured moment echoes your distinctive charm. Allow me to foster a safe and affirming environment, encouraging you to delve into your femininity and celebrate your uniqueness. Collaboratively, we'll craft mesmerizing, intimate imagery that spotlights your inner goddess. Embark on your journey of self-love, while I encapsulate the essence of your beauty with refined artistry.</p>
                </section>
            </section>

            <section className="session-container">
            <section className="container-img">
            <div className="container-image-with-btn">
                    <img className="sessions-img" src={headshotOne} alt="Vancouver headshot photoshoot" loading="lazy" width="auto" height="auto"/>
                    <div className="btn-cta rotation-container"  onClick={() => navigate(`/portfolio?filter=Headshot`)}>
                        <img className="see-more-img" src={seeMore} alt=""/>
                        <img className="arrow-img" src={arrow} alt=""/>
                    </div>
                </div>
                    <img className="sessions-img down-img" src={headshotTwo} alt="Vancouver headshot photoshoot" loading="lazy" width="auto" height="auto"/>
                </section>
                <section  className="sessions-text" >
                    <h3 className="text-right">Headshot</h3>
                    <p className="sessions-text text-right">Make your professional image shine with a creative headshot! Whether in the studio or outdoors, I specialize in capturing striking headshots that reflect your unique personality and enhance your business presence. Step into the spotlight and let me expertly compose a captivating image that exudes confidence and professionalism. With a keen eye for detail and a passion for visual storytelling, I'll ensure your headshot stands out from the crowd. Elevate your brand and leave a lasting impression with a professional headshot that speaks volumes about your success and ambition.</p>
                </section>
            </section>
            <section className="sessions-text">
            <h3 className="transfer-to-process">If you'd like to learn more about the process, from booking a photo session to receiving the final images, please visit "<a href="/how-it-works">How it works</a>" page.</h3>
            </section>

        </section>
    )
}
export default AboutSession;