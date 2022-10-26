import React from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import styled from 'styled-components/native'
import boyImage from '../assets/boy.png'
import girlImage from '../assets/girl.png'
import arrow from '../assets/up.png'
import { useDispatch } from 'react-redux'
import { changeGender } from '../redux/toolkitSlice'

export default function BattleCard({ item, index, increaseFunc, reduceFunc }) {
    const dispatch = useDispatch()

    const Card = styled.View`
        background-color: #fff;
        height: 150px;
        padding: 5px;
        justify-content: center;
        border-radius: 15px;
        margin-left: 5px;
        margin-right: 5px;
    `
    const Name = styled.Text`
        font-size: 18px;
        flex: 1;
        text-align: center;
    `
    const Gender = styled.Image`
        width: 25px;
        height: 25px;
    `

    return (
        <Card>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                {item.gender && <Pressable onPressIn={() => dispatch(changeGender(item.id))}><Gender source={item.gender == 'boy' ? boyImage : girlImage} /></Pressable>}
                <Name>{item.name ? String(item.name) : `Монстр ${index + 1}`}</Name>
            </View>
            
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 5, alignItems: 'center' }}>
                    <Text>Уровень</Text>

                    <Pressable onPressIn={() => dispatch(increaseFunc({ i: item.id, stat: 'level' }))}>
                        <Image source={arrow} />
                    </Pressable>

                    <Text>{item.level}</Text>

                    <Pressable style={{ rotation: 180 }} onPressIn={() => dispatch(reduceFunc({ i: item.id, stat: 'level' }))}>
                        <Image source={arrow} />
                    </Pressable>
                </View>

                {item.gender && (
                    <View style={{ margin: 5, alignItems: 'center' }}>
                        <Text>Шмотки</Text>

                        <Pressable onPressIn={() => dispatch(increaseFunc({ i: item.id, stat: 'power' }))}>
                            <Image source={arrow} />
                        </Pressable>

                        <Text>{item.power}</Text>

                        <Pressable style={{ rotation: 180 }} onPressIn={() => dispatch(reduceFunc({ i: item.id, stat: 'power' }))}>
                            <Image source={arrow} />
                        </Pressable>
                    </View>
                )}

                <View style={{ margin: 5, alignItems: 'center' }}>
                    <Text>Модиф...</Text>

                    <Pressable onPressIn={() => dispatch(increaseFunc({ i: item.id, stat: 'modifier' }))}>
                        <Image source={arrow} />
                    </Pressable>

                    <Text>{item.modifier}</Text>

                    <Pressable style={{ rotation: 180 }} onPressIn={() => dispatch(reduceFunc({ i: item.id, stat: 'modifier' }))}>
                        <Image source={arrow} />
                    </Pressable>
                </View>
            </View>
        </Card>
    )
}
