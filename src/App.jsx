import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-scroll";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import PopularFoodItems from "./pages/PopularFoodItems";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookTable from "./pages/BookTable";
import Testimonial from "./pages/Testimonials";
import Footer from "./components/Footer";




function App() {
	return (
		<Router>
			<div className="App">
				<Header />

				<main>
					{/* Main Sections */}
					<section id="home" className="min-h-screen bg-blue-100 ">
						<Home />
					</section>

					<section
						id="about"
						className="min-h-screen bg-gray-100 p-12"
					>
						<About />
					</section>

					<section id="dishes" className="min-h-screen bg-gray-100">
						<PopularFoodItems />
					</section>

					<section
						id="bookTable"
						className="min-h-screen bg-gray-100"
					>
						<BookTable />
					</section>

					<section id="clients" className="min-h-screen bg-gray-100">
						<Testimonial />
					</section>

					{/* You can add more sections like portfolio, contact, etc. */}
				</main>

				<Footer />
				
			</div>
		</Router>
	);
}

export default App;
