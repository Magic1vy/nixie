import imageFour from '../assets/not-found-4.png';
import imageCamera from '../assets/camera-404.png';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()
    return (
        <>
            <section className='page-not-found'>
                <h1 className="not-found-header">Oops! This frame isn't in focus.</h1>
                <div className='not-found-container'>
                    <img className='not-found-img-number' src={imageFour} alt='number four'/>
                    <img className='not-found-img-camera' src={imageCamera} alt='camera'/>
                    <img className='not-found-img-number' src={imageFour} alt='number four'/>
                </div>
                <button className='send-request' onClick={() => navigate('/')}>Back to Home page</button>
            </section>
            <Footer />
        </>
    )
  }
export default  NotFound;