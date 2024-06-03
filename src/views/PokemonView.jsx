import React from 'react';
import { PokeList } from '../components/PokeList';



export const PokemonView = () =>{
    return(
        <PokeList start={1} end={10} />
    )
}