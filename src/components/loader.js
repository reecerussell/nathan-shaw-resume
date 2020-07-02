import React from "react";
import "../scss/loader.scss";

const Loader = () => (
	<div className="wrap">
		<div className="loading">
			<div className="bounceball"></div>
			<div className="text">NOW LOADING</div>
		</div>
	</div>
);

export default Loader;
