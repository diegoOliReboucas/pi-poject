import {configureStore} from '@reduxjs/toolkit'
import nameReducer from './Reducers/nameReducer'
import registerReducer from './Reducers/registerReducer'
import regReducer from './Reducers/regReducer'


export const store = configureStore({
  reducer: {
    name: nameReducer,
    register: registerReducer,
    reg: regReducer
  }
})

export type rootState = ReturnType<typeof store.getState>