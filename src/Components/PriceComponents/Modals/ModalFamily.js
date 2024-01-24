import { useEffect } from "react";
import "./style.css";
import React from "react";

const ModalFamily = ( { setIsOpen, children, contactFormRef } ) => {

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
        <div className="modal">
            <div className="overlay" onClick={closeModal}>{React.cloneElement(children, { contactFormRef: contactFormRef })}</div>
        </div>
    )
}
export default ModalFamily;