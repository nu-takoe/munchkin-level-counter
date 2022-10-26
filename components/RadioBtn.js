import React from 'react'
import { Image, Pressable, View } from 'react-native'
import styled from 'styled-components/native'

export default function RadioBtn(props) {

  const Radio = styled.View`
    border: 2px solid black;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
  `

  return (
    <Pressable style={{ alignItems: 'center' }} onPress={() => props.action(props.name)}>
      <Image source={props.img} style={{ marginBottom: 10 }} />
      <Radio>
        {props.name === props.currentGen && <View style={{ width: 14, height: 14, backgroundColor: 'black', borderRadius: 100 }} />}
      </Radio>
    </Pressable>
  )
}
