import React, { useState, useEffect } from 'react';
import dataPortfolio from './dataPortfolio';
import FilterButtons from './FilterButtons';
import Masonry from 'react-masonry-css';
import ScrollToTopButton from '../ ScrollToTopButton';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom'; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const categories = ['All photos', 'Solo', 'Family', 'Maternity', 'Headshot', 'Black/White', 'Real estate', 'Boudoir']; 


function Portfolio() {

    const location = useLocation(); 
    const [images, setImages] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('All photos');
    const [currentImage, setCurrentImage] = useState(null);
    const [imageCount, setImageCount] = useState(15);


    const categoryMapper = {
      'All photos': 'All photos',
      'Solo': 'Solo',
      'Family': 'Family',
      'Maternity': 'Maternity',
      'Headshot': 'Headshot',
      'Black/White': 'Black/White',
      'Real estate': 'Realestate',
      'Boudoir': 'Boudoir'
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const filter = params.get('filter');

        if (filter && categories.includes(filter)) {
            setCurrentCategory(filter);
        }
        let shuffledData = [...dataPortfolio];
        shuffleArray(shuffledData);
        setImages(shuffledData);
    }, [location]);

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

    return (
        <>
        <section className='portfolio-component'>
            <h1 className='heading'>Portfolio</h1>
            <ScrollToTopButton />
            <FilterButtons 
                categories={categories}
                currentCategory={currentCategory}
                onCategoryChange={setCurrentCategory}
            />
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {images
                    .filter(image => currentCategory === 'All photos' || image.category === categoryMapper[currentCategory])
                    .slice(0, imageCount)
                    .map(item => {
                        const { id, image } = item;
                        return (
                            <section className='portfolio-item' key={id} onClick={() => openImage(image)}>
                                <img className='portfolio-img' src={image} alt='Vancouver photographer portfolio' loading="lazy"/>
                            </section>
                        );
                    })}
            </Masonry>


            {imageCount < images.filter(image => currentCategory === 'All photos' || image.category === categoryMapper[currentCategory]).length && (
                <button className='load-more' onClick={() => setImageCount(imageCount + 15)}>Load more</button>
)}


            {currentImage && (
                <section className="modal-portfolio" onClick={closeImage}>
                    <span className="close" onClick={closeImage}>&times;</span>
                    <img className="modal-content-portfolio" src={currentImage} alt='Vancouver photographer portfolio' />
                </section>
            )}
        </section>
            <Footer />
        </>
    );
}

export default Portfolio;

