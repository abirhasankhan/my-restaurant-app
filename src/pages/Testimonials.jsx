import React, { useState, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for play button and navigation
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion components
import testimonials from "../data/testimonialData"; // Replace with actual testimonial data

function Testimonial() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Autoplay logic using useEffect
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 4000); // Change slide every 4000ms (4 seconds)

		return () => clearInterval(interval);
	}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	};

	return (
		<section className="bg-gradient-to-r from-yellow-100 via-neutral-100 to-yellow-100 py-16 px-4 sm:px-8 relative">
			<div className="container mx-auto flex justify-center">
				<div className="relative flex flex-col items-center w-full max-w-5xl">
					{/* Title */}
					<div className="mb-8 w-full text-center">
						<h3 className="text-red-600 font-semibold text-lg">
							&#8226; Crispy, Every Bite Taste
						</h3>
						<h2 className="text-3xl sm:text-4xl font-extrabold mt-2 text-gray-800">
							WHAT OUR CUSTOMERS ARE SAYING
						</h2>
					</div>

					{/* Testimonial Slider */}
					<div className="relative flex items-center justify-between w-full overflow-hidden shadow-lg rounded-lg border border-gray-300">
						{/* Previous Slide Button */}
						<button
							onClick={prevSlide}
							className="absolute left-0 bg-gray-800 bg-opacity-75 p-3 rounded-full text-white hover:bg-opacity-90 transition duration-300 z-10"
						>
							<FaChevronLeft />
						</button>

						<AnimatePresence>
							{testimonials.map(
								(testimonial, index) =>
									index === currentIndex && (
										<motion.div
											key={testimonial.id}
											initial={{ opacity: 0, x: 100 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -100 }}
											transition={{
												type: "spring",
												stiffness: 50,
												damping: 20,
												duration: 0.5,
												ease: "easeInOut", // Smooth easing function for a natural look
											}}
											className="flex md:flex-row flex-col items-stretch w-full"
										>
											{/* Left Section - Customer Quote */}
											<div className="md:w-1/2 w-full bg-yellow-300 p-8 rounded-l-lg flex flex-col justify-between shadow-md">
												<p className="text-gray-800 text-xl italic mb-4 flex-1 leading-relaxed">
													“{testimonial.text}”
												</p>
												<div className="flex items-center">
													<img
														src={testimonial.avatar}
														alt={testimonial.name}
														className="w-14 h-14 rounded-full border-2 border-white shadow-md mr-4"
													/>
													<div>
														<p className="text-lg font-bold text-gray-900">
															{testimonial.name}
														</p>
														<p className="text-sm text-gray-700">
															{
																testimonial.location
															}
														</p>
													</div>
												</div>
											</div>

											{/* Right Section - Dish Image with Play Button */}
											<div className="md:w-1/2 w-full relative flex items-center justify-center overflow-hidden rounded-r-lg">
												<img
													src={testimonial.image}
													alt="Dish"
													className="rounded-r-lg w-full h-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
												/>
												<button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-3 rounded-full shadow-md hover:bg-opacity-100 transition duration-300">
													<FaPlay className="text-yellow-400 text-2xl" />
												</button>
											</div>
										</motion.div>
									)
							)}
						</AnimatePresence>

						{/* Next Slide Button */}
						<button
							onClick={nextSlide}
							className="absolute right-0 bg-gray-800 bg-opacity-75 p-3 rounded-full text-white hover:bg-opacity-90 transition duration-300 z-10"
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
