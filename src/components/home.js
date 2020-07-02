import React from "react";
import NavBar from "./navbar";
import Socials from "./socials";

const Home = ({ socials, navigation }) => (
	<section id="home">
		<NavBar items={navigation} />
		<div className="content">
			<h1>NATHAN SHAW</h1>
			<Socials items={socials} />
		</div>
	</section>
);

export default Home;
