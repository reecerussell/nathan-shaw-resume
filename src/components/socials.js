import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Socials = ({ items }) => (
	<ul className="socials">
		{items.map((item, key) => {
			let title, className, icon;
			switch (item.type) {
				case "facebook":
					title = "Facebook";
					className = "facebook";
					icon = faFacebookF;
					break;
				case "instagram":
					title = "Instagram";
					className = "instagram";
					icon = faInstagram;
					break;
				case "twitter":
					title = "Twitter";
					className = "twitter";
					icon = faTwitter;
					break;
				default:
					return null;
			}

			return (
				<li key={key}>
					<a href={item.link} title={title}>
						<FontAwesomeIcon
							icon={icon}
							className={className}
							size="2x"
						/>
					</a>
				</li>
			);
		})}
	</ul>
);

export default Socials;
