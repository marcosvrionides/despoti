import React from "react";
import "./Contact.css";

function Contact() {
	return (
		<footer id="contact" className="contactContainer">
			<h2 className="sectionHeading">Let’s create magical moments</h2>
			<a
				href="mailto:despotistefanos@gmail.com?subject=Booking%20enquiry"
				className="button buttonPrimary"
			>
				despotistefanos@gmail.com
			</a>
			<p className="copyright">
				&copy; {new Date().getFullYear()} Stefanos Despoti
			</p>
		</footer>
	);
}

export default Contact;
