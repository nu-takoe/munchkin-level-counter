import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Pressable } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { changeTarget, deletePlayer } from '../redux/toolkitSlice'
import remove from '../assets/remove.png'

export default function PlayerView(props) {

    const dispatch = useDispatch()
    const target = useSelector(state => state.main.target)
    const edit = useSelector(state => state.main.editList)

    const Block = styled.View`
        flex-direction: row;
    `
    const Color = styled.View`
        border-radius: 100px;
        width: 50px;
        height: 50px;
        background-color: ${props.player.color};
        justify-content: center;
        align-items: center;
    `
    const ColorLetter = styled.Text`
        color: white;
        font-size: 24px;
        line-height: 50px;
        top: -2px;
    `
    const InfoBlock = styled.View`
        margin-left: 10px;
        justify-content: center;
    `
    const DescriptionText = styled.Text`
        font-size: 18px;
    `
    const Level = styled.View`
        flex-direction: row;
        align-items: center;
    `
    const TotalDamage = styled.View`
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
    `
    const Body = styled.TouchableOpacity`
        padding: 10px;
        flex-direction: row;
        justify-content: space-between;
    `

    function pressOnPlayer() {
        if (edit == false) {
            dispatch(changeTarget(props.playerIndex))
            props.navigation && props.navigation.navigate("Player")
        }
    }

    return (
        <Body onPressIn={pressOnPlayer} style={{ backgroundColor: (!props.navigation && target == props.playerIndex) ? 'white' : 'none' }}>
            <Block>
                <Color>
                    <ColorLetter>{props.player.name[0].toUpperCase()}</ColorLetter>
                </Color>
                <InfoBlock>
                    <DescriptionText>{props.player.name}</DescriptionText>
                    <Image source={props.player.gender == 'boy' ? require('../assets/boy.png') : require('../assets/girl.png')} style={{ width: 20, height: 20 }} />
                </InfoBlock>
            </Block>
            <Block>
                {edit &&
                    <Pressable style={{ justifyContent: 'center', marginRight: 15 }} onPressIn={() => dispatch(deletePlayer(props.player.id))}>
                        <Image source={remove} />
                    </Pressable>}
                <Level>
                    <Image source={require('../assets/level-up.png')} style={{ marginRight: 5 }} />
                    <DescriptionText>{props.player.level}</DescriptionText>
                </Level>
                <TotalDamage>
                    <Image source={require('../assets/sword.png')} />
                    <DescriptionText>{props.player.level + props.player.power}</DescriptionText>
                </TotalDamage>
            </Block>
        </Body>
    )
}

