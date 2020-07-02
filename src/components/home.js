import React from "react";
import NavBar from "./navbar";
import Socials from "./socials";

const Home = () => (
	<section id="home">
		<NavBar />
		<div className="content">
			<h1>NATHAN SHAW</h1>
			<Socials />
		</div>
	</section>
);

export default Home;
