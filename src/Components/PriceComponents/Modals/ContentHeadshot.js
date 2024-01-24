import "./style.css";
import closeIcon from "../../../assets/hero-page/close.png"

const ContentHeadshot = ({ setIsOpen, contactFormRef }) => {

    const handleClick = () => {
        setIsOpen(false);
        contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="modal_content-price">
            <button className="modal-price-btn" onClick={ () => setIsOpen(false)}>
            <img className='closeIcon' src={closeIcon} alt="close" />
            </button>
            <h2 className="heading">Headshot packages</h2>
            <div className="price-packages-container">
                <section className="price-package regular">
                    <h3 className="modal-price-package">Basic</h3>
                    <p className="price"><span className="price-span">$350</span></p>
                        <ul className="price-list">
                            <li>30 min</li>
                            <li>1 outfits</li>
                            <li>10 retouched photos</li>
                            <li>Providing guidance on poses and styles.</li>
                        </ul>
                </section>
                <section className="price-package regular">
                    <h3 className="modal-price-package">Premium</h3>
                    <p className="price"><span className="price-span">$400</span></p>
                        <ul className="price-list">
                            <li>1.5 hours</li>
                            <li>1-2 outfits</li>
                            <li>15 retouched photos</li>
                            <li>Providing guidance on poses and styles.</li>
                        </ul>
                </section>
                <section className="price-package">
                <div className="ribbon-wrapper">
                    <div className="glow">&nbsp;</div>
                    <div className="ribbon-front">Most Popular</div>
                    <div className="ribbon-edge-topleft"></div>
                    <div className="ribbon-edge-topright"></div>
                    <div className="ribbon-edge-bottomleft"></div>
                    <div className="ribbon-edge-bottomright"></div>
                </div>
                    <h3 className="modal-price-package">Deluxe</h3>
                    <p className="price"><span className="price-span">$500</span></p>
                        <ul className="price-list">
                            <li>1.5-2 hours</li>
                            <li>2-3 outfits</li>
                            <li>20 retouched photos</li>
                            <li>Providing guidance on poses and styles.</li>
                        </ul>
                </section>
            </div>
            <button className='submit-btn submit-review' onClick={handleClick}>Send a request</button>
        </div>
    )
}
export default ContentHeadshot; 