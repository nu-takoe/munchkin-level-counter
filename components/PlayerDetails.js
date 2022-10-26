import React from 'react'
import { View, Text, Pressable, Alert, Keyboard, Image } from 'react-native'
import styled from 'styled-components/native'
import RadioBtn from './RadioBtn'
import boyImg from '../assets/boy.png'
import girlImg from '../assets/girl.png'

export default function PlayerDetails(props) {

    const Block = styled.View`
        width: 50%;
        justify-content: center;
        align-items: center;
    `
    const PlayerColor = styled.Pressable`
        height: 70px;
        width: 70px;
        border-radius: 100px;
        background-color: ${props.info.color};
    `
    const PlayerGender = styled.View`
        flex-direction: row;
        width: 70%;
        justify-content: space-between;
    `

    function openModal() {
        Keyboard.dismiss()
        props.modal(true)
    }

    function changeGender(gen){
        props.setInfo({
            ...props.info,
            gender: gen
        })
    }

    return (
        <View style={{ flexDirection: 'row', width: '80%', marginTop: 20 }}>
            <Block>
                <PlayerGender>
                    <RadioBtn img={boyImg} name={'boy'} currentGen={props.info.gender} action={changeGender}/>
                    <RadioBtn img={girlImg} name={'girl'} currentGen={props.info.gender} action={changeGender}/>
                </PlayerGender>
            </Block>
            <Block>
                <PlayerColor onPress={openModal} style={{ backgroundColor: props.info.color, height: 70, width: 70, borderRadius: 100 }} />
            </Block>
        </View>
    )
}
