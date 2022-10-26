import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  font-size: 24px;
  height: 52px;
  padding-left: 10px;
  padding-right: 10px;
`
const InputTitle = styled.Text`
  position: relative;
  top: 10px;
  left: 10px;
  font-size: 16px;
  background: #F0F0F0;
  z-index: 2;
  width: 40px;
  text-align: center;
`

export default function CreateInput({ info, setInfo }) {

  return (
    <View style={{width: '80%', position: 'relative',}}>
      <InputTitle>Имя:</InputTitle>
      <Input
        onChangeText={text => setInfo({ ...info, name: text })}
        value={info.name}
      />
    </View>
  )
}
