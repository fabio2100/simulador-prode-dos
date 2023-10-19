import React from 'react';

function Modal(props) {
  return (<div>
    <div className="modal-backdrop" onClick={props.onClose}></div>
    <div className="modal">
      <div className="modal-content">
        <button className='close' onClick={props.onClose}>X</button>
        {props.children}
      </div>
    </div>
    </div>
  );
}

export default Modal;