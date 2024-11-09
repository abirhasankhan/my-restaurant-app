// AboutSection.jsx
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import foodImage from "../images/image01.jpg"; // Replace with your main image path

function About() {
	const [activeSection, setActiveSection] = useState("about"); // State to track active section
	const [direction, setDirection] = useState("left"); // State to track animation direction

	// Content for different sections
	const sectionContent = {
		about: {
			title: "EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD",
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare nec sed est cursus. Vel hac convallis purus, facilisi dolor pellentesque bibendum viverra tempor. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.`,
		},
		experience: {
			title: "OUR CULINARY JOURNEY",
			description: `With over 50+ years of market experience, we have perfected our craft to provide an unforgettable dining experience that customers love and trust.`,
		},
		contact: {
			title: "GET IN TOUCH WITH US",
			description: `Feel free to reach out for reservations, catering services, or any inquiries about our menu and services. We look forward to serving you!`,
		},
	};

	const handleNavigationClick = (e, section) => {
		e.preventDefault(); // Prevent page reload

		// Determine animation direction based on the current and target section
		if (section !== activeSection) {
			setDirection(section === "about" ? "right" : "left");
			setActiveSection(section); // Set active section
		}
	};

	// Define Framer Motion variants for left and right animations
	const variants = {
		initial: (direction) => ({
			x: direction === "left" ? 100 : -100,
			opacity: 0,
		}),
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exit: (direction) => ({
			x: direction === "left" ? -100 : 100,
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		}),
	};

					

	return (
		<section className="container mx-auto px-4 sm:px-8 py-8 md:py-16 relative overflow-hidden">
			<div className="flex flex-col lg:flex-row gap-8">
				{/* Left Image with Badge */}
				<div className="lg:w-1/2 relative">
					<div className="relative w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
						<img
							src={foodImage}
							alt="Delicious food"
							className="w-full h-auto rounded-lg shadow-lg"
						/>
					</div>

					{/* Badge */}
					<div className="absolute top-4 left-4 flex items-center bg-white p-2 rounded-md shadow-md">
						<div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold text-lg">
							50+
						</div>
						<div className="ml-2 text-xs sm:text-sm">
							<p className="font-semibold">Market</p>
							<p>Experiences</p>
						</div>
					</div>
				</div>

				{/* Right Content */}
				<div className="lg:w-1/2">
					{/* Navigation Links */}
					<div className="flex space-x-4 sm:space-x-8 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap">
						<a
							href="#about"
							onClick={(e) => handleNavigationClick(e, "about")}
							className={`text-lg font-semibold ${
								activeSection === "about"
									? "border-b-4 border-red-500"
									: "text-gray-700 hover:border-b-4 hover:border-red-500"
							}`}
						>
							About
						</a>
						<a
							href="#experience"
							onClick={(e) =>
								handleNavigationClick(e, "experience")
							}
							className={`text-lg font-semibold ${
								activeSection === "experience"
									? "border-b-4 border-red-500"
									: "text-gray-700 hover:border-b-4 hover:border-red-500"
							}`}
						>
							Experience
						</a>
						<a
							href="#contact"
							onClick={(e) => handleNavigationClick(e, "contact")}
							className={`text-lg font-semibold ${
								activeSection === "contact"
									? "border-b-4 border-red-500"
									: "text-gray-700 hover:border-b-4 hover:border-red-500"
							}`}
						>
							Contact
						</a>
					</div>

					{/* Heading and Description with Framer Motion animation */}
					<motion.div
						key={activeSection}
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						custom={direction}
					>
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
							{sectionContent[activeSection].title}
						</h2>
						<p className="text-gray-700 mb-6 text-sm sm:text-base">
							{sectionContent[activeSection].description}
						</p>
					</motion.div>

					{/* Button and Contact Info */}
					<div className="flex justify-center lg:justify-start">
						<button className="bg-yellow-400 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							ABOUT MORE
						</button>

						<p className="text-lg font-semibold flex items-center text-center sm:text-left">
							<span
								role="img"
								aria-label="phone"
								className="mr-2"
							>
								&nbsp; 📞+48 3426 739 485
							</span>
						</p>
					</div>
				</div>
			</div>

			{/* Features Section */}
			<div className="flex flex-col sm:flex-row justify-between mt-12 space-y-6 sm:space-y-0 sm:space-x-4">
				<div className="flex flex-col items-center text-center px-4 sm:px-0">
					<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-2">
						<span role="img" aria-label="delivery">
							🚚
						</span>
					</div>
					<h3 className="text-lg sm:text-xl font-bold">
						FAST DELIVERY
					</h3>
					<p className="text-gray-600 text-xs sm:text-sm">
						Within 30 minutes
					</p>
				</div>

				<div className="flex flex-col items-center text-center px-4 sm:px-0">
					<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-2">
						<span role="img" aria-label="dining">
							🍽️
						</span>
					</div>
					<h3 className="text-lg sm:text-xl font-bold">
						ABSOLUTE DINING
					</h3>
					<p className="text-gray-600 text-xs sm:text-sm">
						Best buffet restaurant
					</p>
				</div>

				<div className="flex flex-col items-center text-center px-4 sm:px-0">
					<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-2">
						<span role="img" aria-label="pickup">
							📦
						</span>
					</div>
					<h3 className="text-lg sm:text-xl font-bold">
						PICKUP DELIVERY
					</h3>
					<p className="text-gray-600 text-xs sm:text-sm">
						Grab your food order
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
