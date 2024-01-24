import React, { useState, useEffect } from 'react';
import dataBoudoir from './dataBoudoir';
import AgeWarningModal from './AgeWarningModal';
import Masonry from 'react-masonry-css';
import Footer from '../Footer';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function BoudoirPortfolio() {
    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(null);
    const [ageConfirmed, setAgeConfirmed] = useState(false);
        const [imageCount, setImageCount] = useState(15);

    useEffect(() => {
        let shuffledData = [...dataBoudoir];
        shuffleArray(shuffledData);
        setImages(shuffledData);
    }, []);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const openImage = (image) => {
        setCurrentImage(image);
        document.body.style.overflow = 'hidden';
    }

    const closeImage = () => {
        setCurrentImage(null);
        document.body.style.overflow = 'auto';
    }

    if (!ageConfirmed) {
        return <AgeWarningModal onConfirm={() => setAgeConfirmed(true)} />
    }

    return (
        <>
        <section className='portfolio-component'>
            <h1 className='heading'>Boudoir Portfolio</h1>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images
                .slice(0, imageCount)
                .map(item => {
                    const { id, image } = item;
                    return (
                        <div className='portfolio-item' key={id} onClick={() => openImage(image)}>
                            <img className='portfolio-img' src={image} alt='portfolio' loading="lazy"/>
                        </div>
                    );
                })}
            </Masonry>

            {images.length > imageCount && (
                <button  className='load-more' onClick={() => setImageCount(imageCount + 15)}>Load more</button>
            )}

            {currentImage && (
                <section className="modal-portfolio" onClick={closeImage}>
                    <span className="close" onClick={closeImage}>&times;</span>
                    <img className="modal-content-portfolio" src={currentImage} alt='Full Size'/>
                </section>
            )}
        </section>
            <Footer />
        </>
    );
}

export default BoudoirPortfolio;
