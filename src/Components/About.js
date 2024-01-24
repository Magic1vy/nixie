import React from "react";
import avatar from "../assets/IMG_1190 2.jpg";
import { useNavigate } from 'react-router';
import Footer from "./Footer";
import ScrollToTopButton from "./ ScrollToTopButton";

function About (){

    const navigate = useNavigate()

    return(
        <>
        <section>
            <img className="avatar" src={avatar} alt="avatar" />
            <ScrollToTopButton />
            <section className="about-section">
                <h1 className="heading">About your photographer</h1>
                <p className="text">Welcome to Nixie photo!</p>
                <p className="text"><strong>I'm Elena Dimarezkaya, a Professional photographer in Vancouver.</strong> <br/>
                Originally from Ukraine, I spent 7.5 incredible years in Toronto before embarking on a new chapter in Vancouver's photography scene.</p>
                <p className="text">Photography is more than just my profession—it's my fervor. I'm ceaselessly moved by the world that surrounds me and am driven to encapsulate its allure across various styles. Ranging from individual portraits to boudoir and everything amidst, each shoot I undertake is infused with creativity and optimism. Whether your preference leans towards classic sophistication, modern panache, or a sprinkling of whimsy, I am here to materialize your envisaged concept. Utilizing my skillset and guidance, I'll ensure you are at ease and exuding confidence in front of the lens, allowing your distinctive character to take center stage.</p>
                <p className="text">I'm excited to continue my photographic endeavors in Vancouver, extending my services within these dynamic metropolise. Regardless of your location, my commitment is to craft captivating images that narrate your tale and immortalize your precious instants.</p>
                <p className="text">I appreciate your consideration of Nixie.photo, a standout name in Vancouver's photography. Let's set sail on this artistic journey together, securing memories that will transcend time.</p>
            </section>
            <section className="explore-section">
                <p><span className="explore-portfolio"  onClick={() => navigate('/portfolio')}>Explore my portfolio</span></p>
            </section>
            <section className="achievements">
                <div>
                    <p className="achievements-number">9+</p>
                    <p className="achievements-text">Years of expirience</p>
                </div>
                <div>
                    <p className="achievements-number">300+</p>
                    <p className="achievements-text">Satisfied clients</p>
                </div>
                <div>
                    <p className="achievements-number">2500+</p>
                    <p className="achievements-text">Photo sessions taken</p>
                </div>
            </section>

                <section className="impressed-container">
                    <p className="impressed-text">Impressed with my works?</p>
                    <p className="hire-text">Hire me for collaboration!</p>
                    <button className='send-request' onClick={() => navigate('/contacts')}>Send a request</button>
                </section>
            </section>
        <Footer />
        </>
    )
}
export default About;