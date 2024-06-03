import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
export const AppBar=()=>{
    const AppBarTab=( {active, children, to} )=>{
        return (
            <Link style={styles.link} to={to}>
                <Text style={styles.AppTittle}>{children}</Text>
            </Link>
        )
    }
    return (
        <View style={styles.AppBar}>
            <AppBarTab active={true} to="/" >Lista Pokemons</AppBarTab>
        </View>
    )
}

const styles = StyleSheet.create({
    AppBar:{
        backgroundColor:'#FEFFFF',//color cuadro titulo
        paddingVertical: 5,
        color:'#fff',
        flexDirection:'row',
        marginTop:20,
        borderColor:'#4EC4BB',//borde  titulo
        borderWidth:1,
    },
    link:{
        padding:5,
        
    },
    AppTittle:{
        color:'#0F7E83',//titulo
        paddingHorizontal: 70,
        fontStyle:'italic'
    }
})