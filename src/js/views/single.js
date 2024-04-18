import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(params)
	useEffect(() => {
		actions.getCharacter(params.theid)
	},[])

	return (
		<>

		
		<h1>{store.character.name}</h1>
		<p>Skin color: {store.character.skin_color}</p>
		<p>Height: {store.character.height}</p>
		<p>Gender: {store.character.gender}</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
