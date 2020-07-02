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

library.add(faFacebookF, faTwitter, faInstagram);

const Home = React.lazy(() => import("./components/home"));
const About = React.lazy(() => import("./components/about"));

const App = () => (
	<Router>
		<Switch>
			<Suspense fallback={<Loader />}>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} />
				<Redirect to="/" />
			</Suspense>
		</Switch>
	</Router>
);

export default App;
