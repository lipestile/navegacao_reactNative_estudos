import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/home/Home';
import Post from '../screen/posts/Post';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator()

export default function DrawerRouter() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen 
                name="Home" 
                component={Home}
                options={{
                    drawerLabel: 'usuários',
                   
                    drawerIcon: () => {
                        return(
                            <Ionicons name='people' size={20} color='#E14E00' ></Ionicons>
                        )
                    }
                }}
                
                
                />
            <Drawer.Screen name="Postes" component={Post} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})