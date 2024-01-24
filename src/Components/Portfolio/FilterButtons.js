import React from 'react';
import { useNavigate } from 'react-router-dom';

function FilterButtons({ categories, currentCategory, onCategoryChange }) {
    const navigate = useNavigate();

    return (
        <section className='filter-component'>
            {categories.map((category) => (
                <button 
                className="filter-btn"
                    key={category}
                    onClick={() => {
                        if (category === 'Boudoir') {
                            navigate('/boudoir');
                        } else {
                            onCategoryChange(category);
                        }
                    }}
                    style={{
                        borderBottom: currentCategory === category ? '2px solid #D29F55' : 'none',
                        paddingBottom: '2px'
                    }}
                >
                    {category}
                </button>
            ))}
        </section>
    );
}

export default FilterButtons;

