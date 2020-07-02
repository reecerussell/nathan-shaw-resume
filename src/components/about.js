import React from "react";
import NavBar from "./navbar";
import Socials from "./socials";

const About = () => (
	<section id="about">
		<NavBar />
		<div class="content">
			<h1>Hi,</h1>
			<p>
				My name is Nathan. I am currently a graphic design student at
				Milton Keynes College. I have just started my second year of
				Level 3 of Graphic Design, after I completed a Level 2 course in
				creative digital arts - which I recieved a distinction.
			</p>
			<p>
				During my space time I am mostly being creative, whether that is
				in college or in my personal time, taking on my own projects.
				However, if I'm not creating, I'll usually be found on my bike.
			</p>
			<p>
				Most of my projects and college work can be found in my
				portfolio.
			</p>
			<Socials />
		</div>
	</section>
);

export default About;
