import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Text } from 'react-native-paper'

export default function Listacarros() {
    const[carros, setCarros] = useState(['Gol', 'Opala', ''])


  return (
    <View style={styles.container}>

        <FlatList
        data={carros}
        renderItem={({item})=>{
            return(
                <Text style={styles.Texto}>{item}</Text>
            )
        }}
        
        
        
        >
        </FlatList>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    Texto:{
        fontSize:20,
        fontWeight: 'bold',
    }
})