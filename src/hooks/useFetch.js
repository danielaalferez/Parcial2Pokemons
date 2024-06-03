import { useEffect, useState } from "react";

export const useFetch = (start, end) => {
  const urlbase2 = 'https://pokeapi.co/api/v2/pokemon'
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    errors: null,
  });
  const getFetch = async () => {
    try {
      let gottenPokemons = [];
      for (let i = start; i <= end; i++) {
        const response = await fetch(`${urlbase2}/${i}`);
        const data = await response.json()
        
          .catch((error) => {
            console.log(error);
          });
        
        const addedPokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
         
        };
        
        console.log(addedPokemon)
        gottenPokemons.push(addedPokemon);
      }
      setState({
        data: gottenPokemons,
        isLoading: false,
        errors: null,
      });
    } catch (errors) {
      setState({
        data: null,
        isLoading: false,
        errors: errors,
      });
    }
  };

  useEffect(() => {
    getFetch();
  }, [start, end]);
  return {
    data: state.data,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};

