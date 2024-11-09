import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for styling
import { FaCalendarAlt, FaUserFriends } from "react-icons/fa"; // Import icons for the input fields

function BookTable() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		date: new Date(), // Initial date value
		people: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleDateChange = (date) => {
		setFormData({ ...formData, date });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.name &&
			formData.email &&
			formData.date &&
			formData.people
		) {
			alert("Your table has been booked!");
			// Reset form
			setFormData({
				name: "",
				email: "",
				date: new Date(),
				people: "",
				message: "",
			});
		}
	};

	return (
		<section className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen py-16 px-6 flex items-center justify-center">
			<div className="container mx-auto flex flex-col items-center justify-center lg:flex-row lg:justify-between h-full max-w-5xl">
				{/* Left Form Section */}
				<div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
					<h3 className="text-yellow-400 font-semibold mb-2 text-lg tracking-widest uppercase">
						&#8226; Book Now
					</h3>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4">
						Reserve Your Table
					</h2>
					<p className="text-gray-400 mb-8 leading-relaxed">
						Join us for a unique dining experience crafted with
						fresh, locally sourced ingredients and unmatched
						flavors. Reserve a table for an unforgettable meal!
					</p>

					<form onSubmit={handleSubmit} className="space-y-6 w-full">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Name Input */}
							<input
								type="text"
								name="name"
								placeholder="Your Name *"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full bg-transparent border border-gray-600 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							/>
							{/* Email Input */}
							<input
								type="email"
								name="email"
								placeholder="Your Email *"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full bg-transparent border border-gray-600 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							/>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{/* Reservation Date Input */}
							<div className="relative">
								<DatePicker
									selected={formData.date}
									onChange={handleDateChange}
									className="w-full bg-transparent border border-gray-600 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
									dateFormat="dd/MM/yyyy"
								/>
								<FaCalendarAlt className="absolute right-3 top-3 text-yellow-400 pointer-events-none" />
							</div>
							{/* Total People Input */}
							<div className="relative">
								<input
									type="number"
									name="people"
									placeholder="Total People"
									value={formData.people}
									onChange={handleChange}
									required
									className="w-full bg-transparent border border-gray-600 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
								/>
								<FaUserFriends className="absolute right-3 top-3 text-yellow-400 pointer-events-none" />
							</div>
						</div>
						{/* Message Input */}
						<textarea
							name="message"
							placeholder="Message"
							value={formData.message}
							onChange={handleChange}
							className="w-full bg-transparent border border-gray-600 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
							rows="4"
						></textarea>
						{/* Submit Button */}
						<button
							type="submit"
							className="w-full bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 shadow-lg transform hover:scale-105 transition duration-300"
						>
							Reserve Now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}

export default BookTable;
