import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Character = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getCharacters()
    }, [])

    return (

        <div className="text-center mt-5 container">
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.characters.map((item, index) => (
                        //return se sobreentiende que va entre parentesis
                        <div className="card" key={index} style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (index + 1) + ".jpg"} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">gender: {item.gender}</p>
                                <p className="card-text">height: {item.height}</p>
                                <p className="card-text">hair color: {item.hair_color}</p>
                            </div>
                            <Link to={"/single/" + (index + 1)}>
                                <button className="btn btn-outline-success ">Learn more</button>
                            </Link>

                            <button className="btn btn-outline-warning" onClick={() => { actions.addFaves(item.name) }}><i className="fas fa-heart"></i></button>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
};
