import React, { Suspense } from "react";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import "./App.scss";
import Loader from "./components/loader";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFacebookF,
	faInstagram,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import content from "./content";

library.add(faFacebookF, faTwitter, faInstagram);

const Home = React.lazy(() => import("./components/home"));
const About = React.lazy(() => import("./components/about"));

const App = () => {
	const render = (component, props) =>
		React.createElement(component, { ...props, ...content });

	return (
		<Router>
			<Switch>
				<Suspense fallback={<Loader />}>
					<Route
						path="/"
						component={(props) => render(Home, props)}
						exact
					/>
					<Route
						path="/about"
						component={(props) => render(About, props)}
					/>
					<Redirect to="/" />
				</Suspense>
			</Switch>
		</Router>
	);
};

export default App;
