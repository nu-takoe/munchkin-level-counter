import React from 'react'
import { View, Pressable, TouchableOpacity, Alert } from 'react-native'
import styled from 'styled-components/native'

export default function ModalColor(props) {

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
    `

    const Palette = styled.View`
        width: 210px;
        flex-wrap: wrap;
        flex-direction: row;
    `

    const Color = styled.TouchableOpacity`
        width: 50px;
        height: 50px;
        border-radius: 100px;
        margin: 10px;
    `
    function chooseColor(color) {
        props.setInfo({...props.info, color: color})
        props.modal(false)
    }

    return (
        <ModalBody onPress={() => props.modal(false)}>
            <Modal>
                <Palette>
                    {props.colors.map((item, index) => <Color key={index} style={{ backgroundColor: item }} onPress={() => chooseColor(item)} />)}
                </Palette>
            </Modal>
        </ModalBody>
    )
}
