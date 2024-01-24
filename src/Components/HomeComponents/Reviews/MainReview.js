import { useEffect, useState } from 'react';
import Reviews from './Reviews';
import { getAllReviews } from './FetchReviews';
import Modal from '../Reviews/Modal/Modal';
import Content from './Modal/Content';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import LoaderPage from './Loader/LoaderPage';


function MainReview () {
    const [myReview, setReview] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isSwipeable, setIsSwipeable] = useState(!isMobileDevice());

    function isMobileDevice() {
        return window.innerWidth <= 768; 
    }
    

    useEffect(() => {
        getAllReviews(setReview, setLoading);
    }, []);

    useEffect(() => {
        function handleResize() {
            setIsSwipeable(!isMobileDevice());
        }
    
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    return(
        <section className='review-component'>
        { loading ? <LoaderPage /> :
            <>
                <h2 className='heading'>Reviews</h2>
                <Carousel swipeable={isSwipeable} showThumbs={false}>
                    {myReview.map((review) => <Reviews name={review.name} comment={review.comment} key={review._id} />)}
                </Carousel>
                <button className='submit-btn submit-review' onClick={() => setIsOpen(true)}>Leave a review</button>
                {isOpen &&  
                <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen} setReview={setReview} />
                </Modal>
                }
            </>
        }
    </section>
    )
}

export default MainReview;
