import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import NavBar from "./navbar";

const Home = () => (
	<section id="home">
		<NavBar />
		<div className="content">
			<h1>NATHAN SHAW</h1>
			<ul className="socials">
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
