import React from "react";
import "./App.scss";
import Home from "./components/home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF);

const App = () => {
	return (
		<>
			<Home />
		</>
	);
};

export default App;
