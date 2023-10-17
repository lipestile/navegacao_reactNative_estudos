import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Button, Card, IconButton, Text, TextInput } from 'react-native-paper'

export default function Listacarros() {
    const[carros, setCarros] = useState(['Gol', 'Opala', ])
    const[inputValue, setInputValue] = useState('')


        function adicionarCarro() {
            let novaListadecarros = carros
            novaListadecarros.push(inputValue)
            setCarros(novaListadecarros)
            setInputValue('')            

            // metado de expert
            // setCarros([...carros, inputValue])
        }

  return (
    <View style={styles.container}>
        <View style={styles.input}>
            <TextInput
            style={{flex: 7}}
            mode='outlined'
            label='carros'
            placeholder='Adicionar o carro'
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
            />
            <Button
                mode='contained'
                style={styles.butao}
                onPress={adicionarCarro}
            >
                Add
            </Button>
        </View>

        <FlatList

        style={styles.list}
        data={carros}
        renderItem={({item})=>{
            return(
                <Card
                    style={styles.card}
                    mode='outlined'
                    >
                        <Card.Content style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.Texto}>{item}</Text>
                            <IconButton mode='contained'  icon='pen' />
                            <IconButton iconColor='red' icon='trash-can-outline'/>
                        </Card.Content>
                    </Card>
            )
        }}        
        />
      
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
        flex: 1,
        fontSize:20,
        fontWeight: 'bold',
    },
    input:{
        flexDirection: 'row',
        width:'95%',
        paddingTop: 10,
        gap: 5,
    },
    butao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    list:{
        width: '95%',
        marginTop: 10
    },
    card:{
           margin: 5,
    }
})