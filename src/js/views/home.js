import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Character } from "./character";
import { Planets } from "./planets";

export const Home = () => {
	return (
		<div className="p-3 mb-2 "style={{ 
			backgroundImage: `url("https://img.freepik.com/free-photo/3d-hyperspace-background-with-warp-tunnel-effect_1048-12526.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713312000&semt=ais")`, 
		  }}>
			<div className="text-center mt-5 ">
				<h1 className="text-muted">Characters</h1>
				<Character />
		
				<h1 className="text-muted">Planets</h1>
				<Planets />
			</div>
		</div>
	)
};
