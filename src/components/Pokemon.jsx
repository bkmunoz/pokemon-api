import React, { useEffect, useState } from 'react';

const ApiCall = props => {
    const [pokemon, setPokemon] = useState(null);
    const [find, setFind] = useState(false);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res)
                setPokemon(res.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return(
        <div>
            <button onClick={e => setFind(!find)} className="btn btn-primary" >Fetch Pokemon</button>
            <hr />
            {
                find ?
                pokemon.map(poke => {
                    return <ul>
                        <li className="bullets">{poke.name}</li>
                        </ul>
                })
                : ""
            }
        </div>
    )
}

export default ApiCall;