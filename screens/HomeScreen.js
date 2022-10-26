import React from 'react'
import { StyleSheet, TouchableOpacity, FlatList, Text, View } from 'react-native'
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';
import addPlus from '../assets/plus.png'
import PlayerView from '../components/PlayerView';

const Home = styled.View`
  position: relative;
  flex: 1;
`
const AddImage = styled.Image`
  width: 30px;
  height: 30px;
`

export default function HomeScreen({ navigation }) {

  const playersList = useSelector(state => state.main.players)

  return (
    <Home>
      <FlatList data={playersList} renderItem={({ item, index }) => <PlayerView player={item} playerIndex={index} navigation={navigation} />} />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Create")}>
        <AddImage source={addPlus} />
      </TouchableOpacity>
    </Home>
  )
}

const styles = StyleSheet.create({
  addButton: {
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
