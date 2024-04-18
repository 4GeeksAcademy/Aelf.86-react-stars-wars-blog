import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	console.log(store.favorites)
	return (
		<nav className="container navbar mb-3 d-flex"  >

			<Link to="/">
				<img
					style={{ objectFit: "cover" }}
					className="navbar-brand mb-0 h1 justify-content-start"
					src="https://img.icons8.com/ios/50/000000/star-wars.png" />
			</Link>

			<div className="ml-auto">

				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle justify-content-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}

					</button>

					<ul className="dropdown-menu dropdown-menu-dark">
						{store.favorites.map((item, index) => {
							return <li key={index}><a className="dropdown-item"> <span onClick={() => { actions.deleteFaves(item.id) }} className={"fa fa-trash"}></span>{item.name}</a></li>
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
