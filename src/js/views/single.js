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
		</>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
