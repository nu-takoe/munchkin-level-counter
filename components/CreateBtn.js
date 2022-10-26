import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/native'
import { addPlayer } from '../redux/toolkitSlice'

export default function CreateBtn({ nav, statusBtn, playerData }) {
    const dispatch = useDispatch()

    const Btn = styled.TouchableOpacity`
        width: 80%;
        height: 40px;
        margin-top: 20px;
        background-color: ${statusBtn === 'active' ? '#4D4D4D' : '#CFCFCF'};
        border-radius: 3px;
        align-items: center;
        justify-content: center;
    `
    const BtnText = styled.Text`
        color: white;
        font-size: 16px;
    `

    function createPlayer() {
        dispatch(addPlayer(playerData))
        nav.navigate("Home")
    }

    return (
        <Btn onPress={() => { statusBtn === 'active' && createPlayer() }}><BtnText>Создать</BtnText></Btn>
    )
}
