import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Character } from "./character";
import { Planets } from "./planets";

export const Home = () => {
	return (
		<div class="p-3 mb-2 bg-dark text-white">
			<div className="text-center mt-5">
				<h1>Characters</h1>
				<Character />
				{/* </div>

		<div className="text-center mt-5"> */}
				<h1>Planets</h1>
				<Planets />
			</div>
		</div>
	)
};
