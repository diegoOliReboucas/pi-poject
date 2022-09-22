import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'nome',
  initialState: {
    name: 'Gustavo Santos', 
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
  }
});

export const {setName} = slice.actions
export default slice.reducer