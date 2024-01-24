import { useEffect } from "react";
import "./style.css";

const Modal = ( { setIsOpen, children } ) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const closeModal = (e) =>{
        if (e.target.classList.contains('overlay')){
            setIsOpen(false)
        }
    }
    return(
        <section className="modal">
            <div className="overlay" onClick={closeModal}>{children}</div>
        </section>
    )
}
export default Modal;