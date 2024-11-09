import React from "react";
import {
	FaClock,
	FaPhone,
	FaFax,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
} from "react-icons/fa"; // Import icons for contact and social media

function Footer() {
	return (
		<footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
			<div className="container mx-auto px-4">
				{/* Title */}
				<div className="text-center mb-10">
					<h2 className="text-3xl sm:text-4xl font-bold tracking-wide text-yellow-400">
						WE'RE READY TO OFFER YOU THE BEST DINING EXPERIENCE
					</h2>
				</div>

				{/* Contact Details */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
					{/* Opening Hours */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-semibold text-xl mb-3 border-b border-yellow-400 pb-1">
							OPENING HOURS
						</h3>
						<div className="flex items-center space-x-2">
							<FaClock className="text-yellow-400" />
							<div>
								<p className="text-lg">Monday - Sunday</p>
								<p className="text-gray-400">
									9:00 AM to 11:30 PM
								</p>
							</div>
						</div>
					</div>

					{/* Contact Details */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-semibold text-xl mb-3 border-b border-yellow-400 pb-1">
							LET'S TALK
						</h3>
						<div className="flex items-center space-x-2">
							<FaPhone className="text-yellow-400" />
							<p className="text-lg">Phone: 1800-222-4545</p>
						</div>
						<div className="flex items-center space-x-2 mt-2">
							<FaFax className="text-yellow-400" />
							<p className="text-lg">Fax: 1800-222-4545</p>
						</div>
					</div>

					{/* Booking Details */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-semibold text-xl mb-3 border-b border-yellow-400 pb-1">
							BOOK A TABLE
						</h3>
						<div className="flex items-center space-x-2">
							<FaEnvelope className="text-yellow-400" />
							<p className="text-lg">Email: demo@website.com</p>
						</div>
						<div className="flex items-center space-x-2 mt-2">
							<FaEnvelope className="text-yellow-400" />
							<p className="text-lg">
								Support: support@website.com
							</p>
						</div>
					</div>

					{/* Address */}
					<div className="flex flex-col items-center md:items-start">
						<h3 className="font-semibold text-xl mb-3 border-b border-yellow-400 pb-1">
							OUR ADDRESS
						</h3>
						<div className="flex items-center space-x-2">
							<FaMapMarkerAlt className="text-yellow-400" />
							<p className="text-lg">
								123 Street, New York City,
								<br />
								United States of America
							</p>
						</div>
					</div>
				</div>

				{/* Social Media Icons */}
				<div className="mt-12 flex justify-center space-x-6">
					{[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
						(Icon, index) => (
							<a
								key={index}
								href="#"
								className="text-white hover:text-yellow-400 transition-transform transform hover:scale-110"
							>
								<Icon size={28} />
							</a>
						)
					)}
				</div>

				{/* Footer Note */}
				<div className="mt-10 text-center">
					<p className="text-gray-500">
						&copy; 2024 All Rights Reserved | Dev by Abir Khan
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
