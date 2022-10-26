import React from 'react'
import { View, Pressable, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import AvailablePlayerCard from '../components/AvailablePlayerCard';

export default function ModalFriends({ modalHandler }) {
    const players = useSelector(state => state.main.players)
    const availablePlayers = players.filter(item => item.fight == false)

    const ModalBody = styled.Pressable`
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(153, 153, 153, 0.7);
        z-index: 3;
        align-items: center;
    `
    const Modal = styled.Pressable`
        top: 25%;
        background-color: #fff;
        border-radius: 10px;
        align-items: center;
        padding: 10px;
        min-height: 50%;
        width: 150px;
        justify-content: center;
    `

    return (
        <ModalBody onPress={() => modalHandler(false)}>
            <Modal>
                {availablePlayers.length > 0 ? <FlatList showsVerticalScrollIndicator={false} data={availablePlayers} renderItem={({ item }) => <AvailablePlayerCard item={item} modalDisabling={modalHandler}/>} /> : <Text>Бог в помощь</Text>}
            </Modal>
        </ModalBody>
    )
}
