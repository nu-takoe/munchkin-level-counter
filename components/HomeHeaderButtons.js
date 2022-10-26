import React from 'react'
import { useState } from 'react'
import { Pressable, Image, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { resetPlayers, toggleEditor } from '../redux/toolkitSlice'
import restart from '../assets/circular-arows.png'
import edit from '../assets/edit.png'
import apply from '../assets/apply.png'
import dice1 from '../assets/dice/dice1.png'
import dice2 from '../assets/dice/dice2.png'
import dice3 from '../assets/dice/dice3.png'
import dice4 from '../assets/dice/dice4.png'
import dice5 from '../assets/dice/dice5.png'
import dice6 from '../assets/dice/dice6.png'

export default function HomeHeaderButtons() {
    const dispatch = useDispatch()
    const editor = useSelector(state => state.main.editList)

    const dice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const [diceNum, setDiceNum] = useState(Math.floor(Math.random() * 6))
    function diceRoll() {
        setDiceNum(Math.floor(Math.random() * 6))
    }

    return (
        <View style={{ flexDirection: 'row' }}>
            <Pressable style={{ marginRight: 15 }} onPressIn={() => dispatch(toggleEditor())}>
                <Image source={editor ? apply : edit} />
            </Pressable>

            <TouchableOpacity onPressIn={diceRoll} style={{ marginRight: 15 }}>
                <Image source={dice[diceNum]} />
            </TouchableOpacity>

            <Pressable onPress={() => dispatch(resetPlayers())}>
                <Image source={restart} />
            </Pressable>
        </View>
    )
}
