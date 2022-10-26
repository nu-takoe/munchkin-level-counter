import React from 'react'
import { useState } from 'react'
import { Image, Pressable, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { killPlayer } from '../redux/toolkitSlice'
import dice1 from '../assets/dice/dice1.png'
import dice2 from '../assets/dice/dice2.png'
import dice3 from '../assets/dice/dice3.png'
import dice4 from '../assets/dice/dice4.png'
import dice5 from '../assets/dice/dice5.png'
import dice6 from '../assets/dice/dice6.png'

export default function KillBtn() {
    const dispatch = useDispatch()

    const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [diceNum, setDiceNum] = useState(Math.floor(Math.random() * 6))
    function diceRoll() {
        setDiceNum(Math.floor(Math.random() * 6))
    }

    return (
        <View  style={{flexDirection: 'row'}}>
            <TouchableOpacity onPressIn={diceRoll} style={{ marginRight: 15 }}>
                <Image source={dice[diceNum]} />
            </TouchableOpacity>

            <Pressable onPress={() => dispatch(killPlayer())}>
                <Image source={require('../assets/death.png')} />
            </Pressable>
        </View>
    )
}
