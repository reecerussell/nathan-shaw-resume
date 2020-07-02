import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = ({ items }) => {
	const { pathname } = useLocation();

	const render = (item, key) => {
		const link = item.link || "/";
		if (link === pathname) {
			return null;
		}

		const target = item.target || "_self";
		if (/^https?:\/\//i.test(link)) {
			return (
				<li key={key}>
					<a href={link} target={target}>
						{item.text}
					</a>
				</li>
			);
		}

		return (
			<li key={key}>
				<Link to={link} target={target} key={key}>
					{item.text}
				</Link>
			</li>
		);
	};

	return (
		<nav className="navbar">
			<ul>{items.map(render)}</ul>
		</nav>
	);
};

export default NavBar;
