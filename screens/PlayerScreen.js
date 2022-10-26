import React from 'react'
import { View, Text, Pressable, Image, StyleSheet, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'
import PlayerView from '../components/PlayerView'
import boyImage from '../assets/boy.png'
import girlImage from '../assets/girl.png'
import { changeGender, increasePlayerStats, increaseTarget, playerStartFight, reducePlayerStats, reduceTarget, } from '../redux/toolkitSlice'
import PlayerCounter from '../components/PlayerCounter'
import GestureRecognizer from 'react-native-swipe-gestures'

export default function PlayerScreen({ navigation }) {

  const dispatch = useDispatch()
  const target = useSelector(state => state.main.target)
  const fightTarget = useSelector(state => state.main.fightTarget)
  const playersList = useSelector(state => state.main.players)

  const Tablet = styled.View`
    height: 350px;
    justify-content: center;
    align-items: center;
  `
  const MainInformation = styled.View`
    align-items: center;
    margin-bottom: 10px;
  `
  const Information = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
  `

  function goFight() {
    if (playersList[target].id != fightTarget) {
      dispatch(playerStartFight())
      navigation.navigate('Fight')
    } else {
      navigation.navigate('Fight')
    }
  }

  return (
    <View style={{ position: 'relative', height: '100%' }}>

      <GestureRecognizer onSwipeRight={() => dispatch(reduceTarget())} onSwipeLeft={() => dispatch(increaseTarget())}>
        <Tablet>
          <MainInformation>
            <Text style={{ fontSize: 30, fontWeight: '400' }}>Сила</Text>
            <Text style={{ fontSize: 100 }}>{playersList[target].level + playersList[target].power}</Text>
            <Pressable onPressIn={() => dispatch(changeGender(playersList[target].id))}>
              <Image source={playersList[target].gender == 'boy' ? boyImage : girlImage} />
            </Pressable>
          </MainInformation>

          <Information>
            <PlayerCounter
              title={'Уровень'}
              count={String(playersList[target].level)}
              reduceFunc={() => dispatch(reducePlayerStats({ i: playersList[target].id, stat: 'level' }))}
              increaseFunc={() => dispatch(increasePlayerStats({ i: playersList[target].id, stat: 'level' }))}
            />

            <PlayerCounter
              title={'Шмотки'}
              count={String(playersList[target].power)}
              reduceFunc={() => dispatch(reducePlayerStats({ i: playersList[target].id, stat: 'power' }))}
              increaseFunc={() => dispatch(increasePlayerStats({ i: playersList[target].id, stat: 'power' }))}
            />
          </Information>
        </Tablet>
      </GestureRecognizer>

      <FlatList data={playersList} renderItem={({ item, index }) => <PlayerView player={item} playerIndex={index} />} />

      <Pressable style={styles.button} onPress={goFight}>
        <Image source={require('../assets/swords.png')} style={{ width: 30, height: 30 }} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    backgroundColor: "#4D4D4D",
    borderRadius: 100,
    right: 0,
    bottom: "0%",
    position: 'absolute',
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
  }
})



