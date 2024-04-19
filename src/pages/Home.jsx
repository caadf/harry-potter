
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/AppContext';


const Home = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.getCharacters()
        actions.getSpells()
    }, [])
    return (

        <>
 <h3>Characters</h3>
            <div className='d-flex m-2'>
            {
                !!store.characters &&
                store?.characters?.results?.length > 0 ?
                    store?.characters?.results?.map((characters, index) => {
                        console.log(characters?.url)
                        const match = characters?.url.match(/\d+(?=\/$)/);
                        const numero = match ? match[0] : "No se encontró número";      
                        return (
                   
                            <div className="card m-3" key={index} style={{width: 500 + 'px'}}>
                                <img src={characters?.url} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{characters?.name}</h5>
                                        <p class="card-text text-dark">Gender: {characters?.gender} <br />
                                                            Hair color: {characters?.species} <br />
                                                            Birth Year: {characters?.house}</p> <br />
                                        {/* <Link  className="btn btn-info" to={"/detailedpeople/"+numero}>More Details</Link>
                                        <button className='btn btn-secondary' onClick={() => actions.addFavorites(people.name)}>Favorites</button> */}
                                    </div>
                            </div>
                        )
                    })
                    : (
                        <h4 className='text-center'>Lista de contactos vacia</h4>
                    )
            }
            </div>
            <h3>Spells</h3>
            <div className='d-flex m-2'>
            {
                !!store.spells &&
                store?.spells?.results?.length > 0 ?
                    store?.spells?.results?.map((spells , index) => {
                        const match = spells?.url.match(/\d+(?=\/$)/);
                        const numero = match ? match[0] : "No se encontró número";
                        return (
                            
                            <div className="card m-3" key={index} style={{width: 500 + 'px'}}>
                                <img src={spells.url} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-titl text-dark">{spells?.name}</h5>
                                        <p class="card-text "> Description: {spells?.description}</p> 
                                       {/*  <Link  className="btn btn-info" to={"/detailedplanets/"+numero}>More Details</Link>
                                        <button className='btn btn-secondary' onClick={() => actions.addFavorites(planets.name)}>Favorites</button> */}
                                    </div>
                            </div>
                        )
                    }) : (
                        <h4 className='text-center'>Lista de contactos vacia</h4>
                    )
            }
            </div>

        </>


    )
}
export default Home