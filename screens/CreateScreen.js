import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import CreateBtn from '../components/CreateBtn';
import CreateInput from '../components/CreateInput'
import ModalColor from '../components/ModalColor';
import PlayerDetails from '../components/PlayerDetails';

export default function CreateScreen({ navigation }) {
  const colors = ['black', 'red', 'blue', 'green', 'yellow', 'purple', 'lime', 'aqua', 'silver', 'olive', 'teal', 'maroon']

  const [info, setInfo] = useState({
    id: Date.now(),
    name: '',
    color: colors[random(11)],
    gender: 'boy',
    level: 1,
    power: 0,
    modifier: 0,
    fight: false,
  });

  const [modal, setModal] = useState(false)

  function random(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', height: '100%' }}>
      <CreateInput info={info} setInfo={setInfo} />
      <PlayerDetails colors={colors} info={info} modal={setModal} setInfo={setInfo} />
      <CreateBtn nav={navigation} statusBtn={info.name.trim().length <= 0 ? 'inactive' : 'active'} playerData={info} />
      {modal && <ModalColor colors={colors} modal={setModal} setInfo={setInfo} info={info} />}
    </View>
  )
}
