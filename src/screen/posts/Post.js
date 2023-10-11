import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import Api from '../../service/Api'
import { FlatList } from 'react-native'
import { Avatar, Button, Card, Title } from 'react-native-paper'

export default function Post(navigation) {

  const [postes, setPostes] = useState([])

  useEffect(() => {

    Api.get('/posts')
      .then((res) => {
        setPostes(res.data.posts)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  console.log(postes)
  return (
    <View>
      <FlatList
        data={postes}
        renderItem={({item})=>{
          return(
            <Card>
            <Card.Content>
              <Title variant="bodyLarge" >{item.title}</Title>
              <Text variant="bodyMedium">{item.body}</Text>
            </Card.Content>
          </Card>
          )

        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold'
  }
})