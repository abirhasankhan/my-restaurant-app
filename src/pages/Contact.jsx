// Contact.jsx
import React from "react";

function Contact() {
	return (
		<div
			className="transition-transform transform translate-x-full fixed top-0 right-0 w-full md:w-2/3 h-screen bg-white p-6 shadow-lg z-30"
			id="contact"
		>
			<h2 className="text-2xl font-bold mb-4">Contact</h2>
			<p className="text-gray-700">
				For reservations or inquiries, please contact us at:
				<br /> Phone: +48 3426 739 485
				<br /> Email: contact@restaurant.com
			</p>
		</div>
	);
}

export default Contact;
