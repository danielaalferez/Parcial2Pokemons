import React, { useState } from 'react';
import { View, Text, Image, Button, Modal, ScrollView, StyleSheet } from 'react-native';
import { Chip, ListItem, Accordion } from 'react-native-paper';

const PokemonDetails = ({ pokemon }) => {
  const [openStats, setOpenStats] = useState(false);
  const [openAbilities, setOpenAbilities] = useState(false);
  const [openMoves, setOpenMoves] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.detailContainer}>
      <View style={styles.center}>
        <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>
      </View>
      <View style={styles.center}>
        <Image
          style={styles.pokemonImage}
          source={{ uri: pokemon.image }}
          alt="The Wisconsin State Capitol building in Madison, WI at night"
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.subtitle}>Tipos</Text>
        <View style={styles.chipContainer}>
          {pokemon.types.map((type, index) => (
            <Chip key={index} style={styles.chip}>{type.description.toUpperCase()}</Chip>
          ))}
        </View>
      </View>
      <View style={styles.center}>
        <Button title="Características" onPress={() => setOpenStats(true)} />
        <Button title="Habilidades" onPress={() => setOpenAbilities(true)} />
        <Button title="Movimientos" onPress={() => setOpenMoves(true)} />
      </View>

      <Modal visible={openStats} onRequestClose={() => setOpenStats(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{pokemon.name}</Text>
          <ScrollView>
            {pokemon.stats.map((stat, index) => (
              <ListItem key={index} title={stat.description} />
            ))}
          </ScrollView>
          <Button title="Cerrar" onPress={() => setOpenStats(false)} />
        </View>
      </Modal>

      <Modal visible={openAbilities} onRequestClose={() => setOpenAbilities(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{pokemon.name}</Text>
          <ScrollView>
            {pokemon.abilities.map((ability, index) => (
              <Accordion key={index} title={ability.name}>
                <Text>{ability.description}</Text>
              </Accordion>
            ))}
          </ScrollView>
          <Button title="Cerrar" onPress={() => setOpenAbilities(false)} />
        </View>
      </Modal>

      <Modal visible={openMoves} onRequestClose={() => setOpenMoves(false)}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{pokemon.name}</Text>
          <ScrollView>
            {pokemon.moves.map((move, index) => (
              <Accordion key={index} title={move.name}>
                <Text>{move.description}</Text>
              </Accordion>
            ))}
          </ScrollView>
          <Button title="Cerrar" onPress={() => setOpenMoves(false)} />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    alignItems: 'center',
    padding: 10,
  },
  center: {
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pokemonImage: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chip: {
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PokemonDetails;
