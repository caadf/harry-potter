import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Context } from '../store/AppContext';


const Characters = () => {

    const { store, actions } = useContext(Context)
    const { id } = useParams()

    useEffect(() => {
        actions.getCharacters(id)
        console.log(id)
    }, [id])

    const { name, gender, species, house } =
        store.characters;

    return (
        <>
            {/*  <h1>{store?.details?.name}</h1> */}
            <div className="container">
                <div className="imagen3">
                    {/* <img
                        src={
                            "https://starwars-visualguide.com/assets/img/characters/" + id + ".jpg"
                        }
                        className="card-img-top"
                        alt="..."
                    ></img> */}
                </div>
              <div className="contenedor">
                    <h1 className="card-title mb-5 ">{name}</h1>
                    <p className="card-text">Gender: {gender}</p>
                    <p className="card-text">Species: {species}</p>
                    <p className="card-text">House: {house}</p>
                    {/* <p className="card-text">Skin Color: {skin_color}</p>
                    <p className="card-text">Eye Color: {eye_color}</p> */}
                  </div> 
            </div>

        </>
    )
}

export default Characters