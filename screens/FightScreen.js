import React from 'react'
import { useState } from 'react'
import { ScrollView, Text, View, StyleSheet, Pressable, Image, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import BattleCard from '../components/BattleCard'
import ModalFriends from '../components/ModalFriends'
import { addMonster, increaseMonsterStats, increasePlayerStats, reduceMonsterStats, reducePlayerStats } from '../redux/toolkitSlice'

export default function FightScreen() {

  const dispatch = useDispatch()
  const players = useSelector(state => state.main.players)
  const monsters = useSelector(state => state.main.fightMonsters)

  const [visible, setVisible] = useState(false)
  const [modal, setModal] = useState(false)
  const fightPlayers = players.filter(item => item.fight == true)

  const TotalSideDamage = styled.View`
    margin: 10px;
    background-color: #CFCFCF;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100px;
  `
  const styles = StyleSheet.create({
    addButton: {
      width: 60,
      height: 60,
      backgroundColor: "#4D4D4D",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 15,
      marginRight: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      rotation: visible ? 45 : 0,
    },
    smallButtons: {
      width: 45,
      height: 45,
      marginBottom: 10,
      marginRight: 15,
      backgroundColor: "#4D4D4D",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    }
  })

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <View style={{ height: 150 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {fightPlayers.map((item, index) => <BattleCard item={item} index={index} increaseFunc={increasePlayerStats} reduceFunc={reducePlayerStats} key={index} />)}
        </ScrollView>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <TotalSideDamage>
          <Text style={{ fontSize: 22 }}>Игрок</Text>
          <Text style={{ fontSize: 18 }}>{fightPlayers.reduce((sum, current) => sum + current.level + current.power + current.modifier, 0)}</Text>
        </TotalSideDamage>

        <Text style={{ fontStyle: 'italic', fontSize: 30 }}>VS</Text>

        <TotalSideDamage>
          <Text style={{ fontSize: 22 }}>Монстр</Text>
          <Text style={{ fontSize: 18 }}>{monsters.reduce((sum, current) => sum + current.level + current.modifier, 0)}</Text>
        </TotalSideDamage>
      </View>

      <View style={{ height: 150 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
          {monsters.map((item, index) => <BattleCard item={item} index={index} increaseFunc={increaseMonsterStats} reduceFunc={reduceMonsterStats} key={index} />)}
        </ScrollView>
      </View>

      <View style={{ right: 0, bottom: "0%", position: 'absolute', alignItems: 'flex-end' }}>
        {visible && <Pressable style={styles.smallButtons} onPress={() => setModal(true)}><Image style={{ width: 32, height: 32 }} source={require('../assets/handshake.png')} /></Pressable>}
        {visible && <Pressable style={styles.smallButtons} onPress={() => dispatch(addMonster())}><Image source={require('../assets/monster.png')} /></Pressable>}

        <Pressable style={styles.addButton} onPressIn={() => setVisible(prev => !prev)}>
          <Image style={{ width: 32, height: 32 }} source={require('../assets/plus.png')} />
        </Pressable>
      </View>
      {modal && <ModalFriends modalHandler={setModal} />}
    </View>
  )
}


