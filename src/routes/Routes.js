import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Router from './Router'
import Post from '../screen/posts/Post'

const Drawer = createDrawerNavigator()
export default function Routes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator >
                <Drawer.Screen name="inicial" component={Router} />
                <Drawer.Screen name='posts' component={Post}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})