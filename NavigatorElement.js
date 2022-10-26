import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import KillBtn from './components/KillBtn'
import HomeHeaderButtons from './components/HomeHeaderButtons'
import CreateScreen from './screens/CreateScreen'
import FightScreen from './screens/FightScreen'
import HomeScreen from './screens/HomeScreen'
import PlayerScreen from './screens/PlayerScreen'

const Stack = createNativeStackNavigator()

export default function NavigatorElement() {
    const target = useSelector(state => state.main.target)
    const playersList = useSelector(state => state.main.players)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    title: "Игроки",
                    headerStyle: {
                        backgroundColor: "#4D4D4D"
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerRight: () => <HomeHeaderButtons/>
                }} />
                <Stack.Screen name="Create" component={CreateScreen} options={{
                    title: "Добавить игрока",
                    headerStyle: {
                        backgroundColor: "#4D4D4D"
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Player" component={PlayerScreen} options={{
                    title: playersList[target] == undefined ? 'none' : String(playersList[target].name),
                    headerStyle: {
                        backgroundColor: "#4D4D4D"
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },
                    headerTintColor: '#fff',
                    headerRight: () => <KillBtn />,
                }} />
                <Stack.Screen name="Fight" component={FightScreen} options={{
                    title: 'Бой',
                    headerStyle: {
                        backgroundColor: "#4D4D4D"
                    },
                    headerTitleStyle: {
                        color: "#fff",
                    },

                    headerTintColor: '#fff',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
