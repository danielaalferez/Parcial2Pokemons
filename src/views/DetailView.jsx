import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PokemonDetails from './components/PokemonDetails';
import useFetch from './hooks/useFetch';

export default function DetailView() {
  const route = useRoute();
  const [id, setId] = useState(route.params.id);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      const data = await useFetch.getPokemonDetail(id);
      setPokemon(data);
    };
    fetchPokemonDetail();
  }, [id]);

  return (
    <View style={styles.container}>
      {pokemon.name ? <PokemonDetails pokemon={pokemon} /> : <Text>Loading...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
