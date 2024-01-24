import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

function AgeWarningModal({ onConfirm }) {
  const navigate = useNavigate();

  return ReactDOM.createPortal(
    <>
      <section className="modal-warning-overlay" onClick={() => navigate('/')}></section>
      <section className="modal-warning">
        <h2 className='heading'>Warning</h2>
        <p className='text'>This content may contain mature imagery. Please confirm that you are over 18 to continue.</p>
        <div className='btn-container'>
        <button className="decline-button" onClick={() => navigate('/portfolio')}>Decline</button>
        <button className="confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </section>
    </>,
    document.body
  );
}

export default AgeWarningModal;
