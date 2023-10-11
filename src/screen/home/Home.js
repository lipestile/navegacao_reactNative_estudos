import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../service/Api'
import { FlatList } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'

export default function Home({navigation}) {


    const [usuarios, setusuarios] = useState([])
    

    useEffect(
        () => {
            Api.get('/users')
                .then((response) => {
                    setusuarios(response.data.users)
                    
                }).catch((error) => {
                    console.log(error)
                })
        },
        [])
            console.log()
    return (
        <View>
            <FlatList
                data={usuarios}
                renderItem={({item}) => {
                    return(
                        <Card.Title
                        
                        title={item.username}
                        titleStyle={{fontSize: 20, fontWeight: 'bold'}}
                        subtitle={item.firstName}
                        left={() => <Avatar.Image size={48} source={{ uri: item.image}} />}
                      />
                    )
                }}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:"center",
        justifyContent:"center"
    }
})