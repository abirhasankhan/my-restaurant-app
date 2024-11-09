import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const handleSetActive = (section) => {
		// Only set active section if it's not the Book a Table button
		if (section !== "bookTable") setActiveSection(section);
	};

	const handleBookTableClick = () => {
		setActiveSection("bookTable"); // Set Book a Table as active section
		toggleMenu(); // Close the menu if it's open
	};

	return (
		<header className="bg-red-700 text-white py-3 px-6 fixed w-full top-0 z-20 shadow-lg border-b border-red-600 transition duration-300">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-3xl font-extrabold tracking-widest">
					Rostaurant
				</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					<ul className="flex space-x-8 text-lg">
						{["home", "about", "dishes", "clients"].map((section) => (
							<li key={section}>
								<Link
									to={section}
									smooth={true}
									duration={500}
									spy={true}
									onSetActive={() => handleSetActive(section)}
									className={`cursor-pointer ${
										activeSection === section
											? "text-yellow-300 border-b-2 border-yellow-300"
											: "hover:text-yellow-300"
									} transition-all duration-300 transform hover:scale-110 hover:font-bold`}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{/* Mobile Menu Toggle Button */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="text-3xl">
						{isMenuOpen ? <FiX /> : <FiMenu />}
					</button>
				</div>

				{/* Book a Table Button (Visible on Desktop Only) */}
				<div className="hidden md:block">
					<Link to="bookTable" smooth={true} duration={500}>
						<button
							onClick={handleBookTableClick}
							className={`${
								activeSection === "bookTable"
									? "bg-yellow-500"
									: "bg-yellow-400"
							} text-black font-bold py-2 px-5 rounded-full hover:bg-yellow-500 shadow-md transform hover:scale-105 transition duration-300`}
						>
							Book a Table
						</button>
					</Link>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-red-800 transition-all overflow-hidden">
					<ul className="flex flex-col space-y-4 mt-4 px-6 pb-4 border-t border-red-600 text-lg">
						{["home", "about", "dishes", "clients"].map((section) => (
							<li key={section}>
								<Link
									to={section}
									smooth={true}
									duration={500}
									spy={true}
									onSetActive={() => handleSetActive(section)}
									onClick={() => {
										handleSetActive(section);
										toggleMenu();
									}}
									className={`cursor-pointer block ${
										activeSection === section
											? "text-yellow-300 border-b-2 border-yellow-300"
											: "hover:text-yellow-300"
									} transition-all duration-300 transform hover:scale-105 hover:font-bold`}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</Link>
							</li>
						))}
						<li>
							<Link
								to="bookTable"
								smooth={true}
								duration={500}
								onClick={() => {
									handleBookTableClick();
								}}
							>
								<button
									className={`w-full ${
										activeSection === "bookTable"
											? "bg-yellow-500"
											: "bg-yellow-400"
									} text-black font-bold py-2 rounded-full hover:bg-yellow-500 transition duration-300 shadow-md`}
								>
									Book a Table
								</button>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}

export default Header;
