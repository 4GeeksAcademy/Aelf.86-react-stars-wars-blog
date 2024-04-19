import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detailedplanets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.getPlanet(params.theid)
	}, [])

	return (
		<div className="container text-muted" className="container text-dark" style={{ 
			backgroundImage: `url("https://lumiere-a.akamaihd.net/v1/images/image_8036a7c0.jpeg")`, 
		  }}>
			{params.theid == 1 ?
			<img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="my-3 img-thumbnail" />
			:
			<img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.theid) + ".jpg"} className="my-3 img-thumbnail" />	
		}

			

			<h1>{store.planets.name}</h1>
			<p>Weather {store.planets.climate}</p>
			<p>Planet Mass{store.planets.mass}</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	);
};

Detailedplanets.propTypes = {
	match: PropTypes.object
};
