import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { TrafficLight } from "./TrafficLight";

//create your first component
const Home = () => {
	return (
	
		<div className="text-center">
		<div className="cable mx-auto"></div>
			<TrafficLight/>
			
		
		</div>
	);
};

export default Home;
