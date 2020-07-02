import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
	<nav className="navbar">
		<ul>
			<li>
				<Link to="/about">About me</Link>
			</li>
			<li>
				<Link to="/education">Education</Link>
			</li>
			<li>
				<Link to="/portfolio">Portfolio</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	</nav>
);

export default NavBar;
