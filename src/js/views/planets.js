import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Planets = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPlanets()
    }, [])

    return (

        <div className="text-center mt-5 container">
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planets.map((item, index) => (
                        //return se sobreentiende que va entre parentesis
                        <div className="card" key={index} style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            {index == 0 ?
                                <img src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" className="card-img-top my-3 " />
                                :

                                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (index + 1) + ".jpg"} className="card-img-top my-3 " />
                            }

                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">climate: {item.climate}</p>
                                <p className="card-text">diameter: {item.diameter}</p>
                                <p className="card-text">population: {item.population}</p>
                            </div>
                            <div d-flex justify-content-between>
                                <Link to={"/detailed/" + (index + 1)}>
                                    <button className="btn btn-outline-success float-start m-3">Learn more</button>
                                </Link>
                                <button className="btn btn-outline-warning float-end m-3" onClick={() => { actions.addFaves(item.name) }}><i className="fas fa-heart"></i></button>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
};
