import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => (
	<section id="home">
		<nav className="navbar">
			<ul>
				<li>
					<a href="#">About me</a>
				</li>
				<li>
					<a href="#">Education</a>
				</li>
				<li>
					<a href="#">Portfolio</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
		<div class="content">
			<h1>NATHAN SHAW</h1>
			<ul>
				<li>
					<a href="#" title="Instagram">
						<FontAwesomeIcon
							icon={faInstagram}
							size="2x"
							className="instagram"
						/>
					</a>
				</li>
				<li>
					<a href="#" title="Twitter">
						<FontAwesomeIcon
							icon={faTwitter}
							size="2x"
							className="twitter"
						/>
					</a>
				</li>
				<li>
					<a href="#" title="Facebook">
						<FontAwesomeIcon
							icon={faFacebookF}
							size="2x"
							className="facebook"
						/>
					</a>
				</li>
			</ul>
		</div>
	</section>
);

export default Home;
