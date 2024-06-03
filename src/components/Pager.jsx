import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, FlatList} from 'react-native';

export const Paginador = () => {
    const [Page, setPage] = useState(1);
    const pages = [1, 2, 3, 4, 5]
    const paginate = (pageNumber) => setPage(pageNumber);

    const Item = ({ name, image }) => (
        <TouchableNativeFeedback>
            <View>
                <Text>{Page}</Text>
            </View>
        </TouchableNativeFeedback>
    )

  return (
    <View> 
    </View>
  )
}
