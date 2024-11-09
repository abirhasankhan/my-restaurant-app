import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Icons for custom buttons
import foodItems from "../data/foodItemsData"; // Import the food items data

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} bg-yellow-400 text-black rounded-full p-2 shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300`}
			style={{
				...style,
				display: "block",
				right: "-15px",
				zIndex: 2,
			}}
			onClick={onClick}
		>
			<FaChevronRight />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} bg-yellow-400 text-black rounded-full p-2 shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-110 duration-300`}
			style={{
				...style,
				display: "block",
				left: "-15px",
				zIndex: 2,
			}}
			onClick={onClick}
		>
			<FaChevronLeft />
		</div>
	);
}

function PopularFoodItems() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section className="bg-gradient-to-b from-yellow-100 via-white to-yellow-50 min-h-screen w-full py-12 px-4 sm:px-8">
			<div className="container mx-auto max-w-6xl">
				{/* Title */}
				<div className="mb-8 text-center">
					<h3 className="text-yellow-600 mt-10 font-semibold text-lg md:text-xl">
						&#8226; Crispy, Every Bite Taste
					</h3>
					<h2 className="text-3xl sm:text-4xl font-bold mt-2 text-gray-800">
						POPULAR FOOD ITEMS
					</h2>
				</div>

				{/* Carousel */}
				<Slider {...settings}>
					{foodItems.map((item, index) => (
						<div key={index} className="p-2">
							<div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 text-center transition-transform transform hover:scale-105 duration-300 hover:shadow-xl">
								<img
									src={item.image}
									alt={item.name}
									className="w-full h-40 object-cover rounded-md mb-4 border-2 border-yellow-400"
								/>
								<h3 className="text-xl font-bold mb-2 text-gray-800">
									{item.name}
								</h3>
								<p className="text-gray-600 text-sm">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}

export default PopularFoodItems;
