import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import styled from 'styled-components/native'
import arrow from '../assets/up.png'

const StatCounter = styled.View`
align-items: center;
width: 100px;
`
const Counter = styled.View`
flex-direction: row;
justify-content: space-between;
width: 100%;
`
const CounterTitle = styled.Text`
font-size: 24px;
`
const Count = styled.Text`
font-size: 24px;
`

export default function PlayerCounter({ title, count, reduceFunc, increaseFunc}) {

    return (
        <StatCounter>
            <CounterTitle>{title}</CounterTitle>
            <Count>{count}</Count>
            <Counter>
                <Pressable style={{ rotation: 180 }} onPressIn={reduceFunc}><Image source={arrow} /></Pressable>
                <Pressable onPressIn={increaseFunc}><Image source={arrow} /></Pressable>
            </Counter>
        </StatCounter>
    )
}
