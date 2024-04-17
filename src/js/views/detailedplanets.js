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
	},[])

	return (
		<div>
		<h1>{store.planets.name}</h1>
		<p>Weather {store.planets.climate}</p>
		<p>Planet Mass{store.planets.mass}</p>
		</div>
	);
};

Detailedplanets.propTypes = {
	match: PropTypes.object
};
