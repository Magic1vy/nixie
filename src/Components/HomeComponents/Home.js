import React from "react";
import AboutSession from './AboutSession';
import ImageSlider from './ImageSlider';
import Welcome from './Welcome';
import Footer from '../Footer';
import { useNavigate } from 'react-router';
import MainReview from "./Reviews/MainReview";
import SurveyFetch from "../SurveyModal/SurveyFetch";
import ScrollToTopButton from "../ ScrollToTopButton";


function Home (){

    const navigate = useNavigate();

    
    

    return(
        <>
            <main>
                <ImageSlider />
                <ScrollToTopButton />
                <Welcome />
                <MainReview />
                <AboutSession />
                <section className='section-art'>
                    <h3>Let’s make art</h3>
                    <button className='send-request' onClick={() => navigate('/contacts')}>Send a request</button>
                </section>
                <SurveyFetch />
                <Footer />
            </main>
        </>
        
    )
}
export default Home;