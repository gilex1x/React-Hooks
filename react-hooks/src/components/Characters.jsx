import React, {useState,useEffect}from 'react';

const Pokemons=()=>{
    const [pokemons,setPokemons]=useState([]);
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(response=>response.json())
            .then(data=>setPokemons(data.results));

    },[])
    return(
        <section className='characters'>
        {
            pokemons.map(pokemon=>(
                <React.Fragment>
                <h3>{pokemon.name}</h3>
                <p>{pokemon.weight}</p>
                </React.Fragment>

            ))
        } 
        </section>
    );
};

export default Pokemons;