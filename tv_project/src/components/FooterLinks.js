import React from "react";
import './FooterLinks.css';

const FooterLinks = () => {
	return (
		<div className="footerLinks">
			<a href='/about'>
				<h5>About</h5>
			</a>
			<a href='/contact'>
				<h5>Contact</h5>
			</a>
            <a href='/'>
				<h5>Home</h5>
			</a>
		</div>
	);
};

export default FooterLinks;
