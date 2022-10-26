import { createSlice } from "@reduxjs/toolkit"

const toolkitSlice = createSlice({
    name: 'appSlice',
    initialState: {
        players: [],
        fightMonsters: [],
        target: 0,
        fightTarget: null,
        editList: false,
    },
    reducers: {
        addPlayer(state, action) {
            state.players.push(action.payload)
        },
        changeTarget(state, action) {
            state.target = action.payload
        },
        reducePlayerStats(state, action) {
            state.players.forEach(item => {
                item.id == action.payload.i && item[action.payload.stat]--
            })
        },
        increasePlayerStats(state, action) {
            state.players.forEach(item => {
                item.id == action.payload.i && item[action.payload.stat]++
            })
        },
        killPlayer(state) {
            state.players.forEach((item, index) => index == state.target && (item.power = 0))
        },
        resetPlayers(state) {
            state.players.forEach(item => {
                item.power = 0
                item.level = 1
            })
        },
        changeGender(state, action) {
            state.players.forEach(item => item.id == action.payload && (item.gender == 'boy' ? item.gender = 'girl' : item.gender = 'boy'))
        },
        playerStartFight(state) {
            state.players.forEach(item => {
                item.fight = false
                item.modifier = 0
            })
            state.players[state.target].fight = true
            state.fightMonsters = [{ id: Date.now(), level: 0, modifier: 0 }]
        },
        addMonster(state) {
            state.fightMonsters.push({ id: Date.now(), level: 0, modifier: 0 })
        },
        increaseMonsterStats(state, action) {
            state.fightMonsters.forEach(item => {
                item.id == action.payload.i && item[action.payload.stat]++
            })
        },
        reduceMonsterStats(state, action) {
            state.fightMonsters.forEach(item => {
                item.id == action.payload.i && item[action.payload.stat]--
            })
        },
        toggleEditor(state){
            state.editList = !state.editList
        },
        deletePlayer(state, action){
            state.players = state.players.filter(item => item.id != action.payload)
        },
        reduceTarget(state){
            state.target = state.target == 0 ? state.players.length - 1 : --state.target
        },
        increaseTarget(state){
            state.target = state.target == state.players.length - 1 ? 0 : ++state.target
        },
        mobilization(state, action){
            state.players.forEach(item => item.id == action.payload && (item.fight = true))
        }
    }
})

export default toolkitSlice.reducer
export const { addPlayer, changeTarget, increasePlayerStats, reducePlayerStats, killPlayer, resetPlayers, changeGender, playerStartFight, addMonster, increaseMonsterStats, reduceMonsterStats, toggleEditor, deletePlayer, reduceTarget, increaseTarget, mobilization } = toolkitSlice.actions
