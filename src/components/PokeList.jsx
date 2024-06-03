import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback,  FlatList } from 'react-native';
import { useFetch } from '../hooks/useFetch'
import { SvgUri } from 'react-native-svg';

export const PokeList = ({ start, end }) => {

    const { data, isLoading, errors } = useFetch(start, end)
    const Item = ({ name, image }) => (
        <TouchableNativeFeedback>
            <View style={styles.item}>
                <SvgUri
                width={250}
                height={150}
                uri={`${image}`}
                />
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableNativeFeedback>
    )
        return (

            <View style={styles.List}>
                {isLoading ?
                    <Text> Cargando..</Text> :

                    <FlatList
                        data={data}
                        renderItem={({ item }) => <Item name={item.name} image={item.image} />}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    ></FlatList>}
            </View>
        )
    }


const styles = StyleSheet.create({
        List: {
            width: '96%',
            padding: 6,
        },
        item: {
            flex: 1,
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 22,
            borderColor: 'green',
            backgroundColor: '#33FFF3',//color fondo pokemon
            borderRadius: 10,
            overflow: 'hidden',
            maxWidth: '45%',
            padding: 4,
            marginHorizontal: 8,
            borderColor:'',//borde 
            borderWidth:1,
        },
        name: {
            marginTop: 2,
            marginBottom: 5,
            color: '#0D6D68',//tipo letra del nombre pokemn
            fontSize: 20,
            alignItems: 'center',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontStyle:'italic'
        },
    });

