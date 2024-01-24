import "./style.css";
import { useState } from 'react';
import { addReview } from '../FetchReviews';
import closeIcon from "../../../../assets/hero-page/close.png";

const Content = ({ setIsOpen, setReview }) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    return (
        <section className="modal_content">
            <button className='close-btn' onClick={ () => setIsOpen(false)}>
                <img className='closeIcon' src={closeIcon} alt="close" />
            </button>
            <section className="modal_content-review">
            <h2 className="heading">Leave a review</h2>
            <input 
                    className="input"
                    type="text" 
                    placeholder="Your full name"
                    value={ name }
                    onChange = {(e) => setName(e.target.value)}/>
                <textarea 
                    type="text" 
                    placeholder="Add a review"
                    value={ comment }
                    onChange = {(e) => setComment(e.target.value)}>
                </textarea>

                <button className='submit-btn submit-review' onClick={() => 
                    addReview(name, setName, comment, setComment, setReview, setIsOpen)}>
                        Submit review
                </button> 
                </section>
        </section>
    )
}
export default Content; 