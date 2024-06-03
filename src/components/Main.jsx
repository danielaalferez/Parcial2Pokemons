import React from "react";
import { AppBar } from "./AppBar";
import { PokemonView } from "../views/PokemonView";
import { View, StyleSheet } from "react-native";
import { Routes, Route } from "react-router-native";

export const Main = () => {
return (
<View style={styles.container}>
<AppBar/>
    <Routes>
        <Route path="/" exact Component={PokemonView}/>
    </Routes>
</View>
);
}
const styles= StyleSheet.create({
container: {
alignItems: 'center',
backgroundColor: '#F1C5F3',//color fondo
paddingBottom: 200
}
});