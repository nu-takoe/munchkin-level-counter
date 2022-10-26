import React from 'react'
import { Pressable, Text, View, Image, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import sword from '../assets/sword.png'
import { mobilization } from '../redux/toolkitSlice'

export default function AvailablePlayerCard({ item, modalDisabling }) {
  const dispatch = useDispatch()

  function getHim(){
    dispatch(mobilization(item.id))
    modalDisabling(false)
  }

  return (
    <Pressable onPress={getHim} style={{ flexDirection: 'row', width: 150, alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={sword} />
        <Text style={{ fontSize: 20 }}>{item.power + item.level}</Text>
      </View>
    </Pressable>
  )
}
