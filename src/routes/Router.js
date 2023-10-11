import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/home/Home';
import Post from '../screen/posts/Post';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
export default function Router() {
    return (
      <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
    screenOptions={{
            // headerShown: false
        }}
        
        
        >
        <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                title: 'Usuários',
                headerTitleAlign: 'center',
                tabBarIcon: () => {
                    return(
                        <Ionicons name='people' color="#AA4000" size={20}></Ionicons>
                    )
                }
            }}
        />
        <Tab.Screen 
            name='Posts' 
            component={Post}
            options={{
                title:'Postes',
                headerTitleAlign: 'center',
                tabBarIcon: () => {
                    return(
                        <Ionicons name='chatbox-sharp' size={20} color='#E14E00' ></Ionicons>
                    )
                }
            }}/>

    </Tab.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})