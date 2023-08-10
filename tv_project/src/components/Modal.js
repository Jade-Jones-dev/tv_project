import React from "react";
import './Modal.css'

const Modal = ({show, closeModal}) => {
	return (
		<div className='overlay'>
			<div className='modal'>
				<h1>This is {show.name}</h1>
				<button onClick={closeModal}>Close show</button>
			</div>
		</div>
	);
};

export default Modal;
