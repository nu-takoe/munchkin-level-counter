import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';

import toolkitSlice from './toolkitSlice';

const rootReducer = combineReducers({
    main: toolkitSlice
})

const persistConfig = {
    key: 'test1',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
                ignoredPaths: ['items.dates'],
            },
        }),
})

export const persistor = persistStore(store)
export default store