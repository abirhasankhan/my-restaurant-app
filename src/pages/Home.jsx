import React from "react";
import foodImage from "../images/pexels-chanwalrus-958545.jpg"; // Replace with your image path

function Home() {
	return (
		<section
			id="home"
			className="bg-gradient-to-br from-red-700 to-red-800 text-white px-4 md:px-8 min-h-screen flex items-center justify-center"
			style={{ paddingTop: "80px" }} // Adjust this value as needed for your header height
		>
			<div className="container mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
				{/* Left Content */}
				<div className="w-full lg:w-1/2 z-10 px-4 lg:px-0 space-y-4 lg:space-y-6">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left leading-tight">
						TASTE THE AUTHENTIC SAUDI CUISINE
					</h1>
					<p className="text-base md:text-lg lg:text-xl mb-6 text-center lg:text-left opacity-90">
						Experience the culinary excellence of Saudi Arabia from the hands of the world’s best chefs, offering you an unforgettable taste beyond just flavor.
					</p>
					<div className="flex justify-center lg:justify-start">
						<button className="bg-yellow-400 text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
							EXPLORE MENU
						</button>
					</div>
				</div>

				{/* Right Image Content with Overlay */}
				<div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-6 lg:mt-0 px-4 lg:px-0">
					<div className="relative w-full max-w-md lg:max-w-lg rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
						{/* Image */}
						<img
							src={foodImage}
							alt="Saudi Cuisine"
							className="w-full h-auto object-cover rounded-lg"
						/>
						{/* "Today Offer" Badge */}
						<div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-yellow-400 shadow-md">
							{/* Inner dotted border */}
							<div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-dotted border-red-700">
								<span className="text-black font-bold text-xs md:text-sm text-center">
									TODAY OFFER
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
