import React from "react";
import './Modal.css'

const Modal = ({show, closeModal}) => {
	return (
		<div className='overlay'>
			<div className='modal'>
                <div>
                <img src={show.image.medium} alt={show.name} />
                </div>
                <div className="show_content">
                <h2>This is {show.name}</h2>
				<button onClick={closeModal}>Close show</button>
                </div>
				
			</div>
		</div>
	);
};

export default Modal;
