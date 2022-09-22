import {createSlice} from '@reduxjs/toolkit'

type propsRegistro = {
  hora: string,
  status: string,
  data: string,
}
export const slice = createSlice({
  name: 'novoRegistro',
  initialState: <propsRegistro[]>[
    {hora: '09:00', status: 'entrada', data: '21/09 - ter'}, 
    {hora: '18:00', status: 'saida', data: '22/09 - qua'},
    {hora: '08:58', status: 'entrada', data: '23/09 - qui'}
  ],
  reducers: {
    novoRegistro(state, action){
    state.unshift(action.payload)
    },
    delRegistro(state, action){
      state.pop()
      }
  }
});

export const {novoRegistro, delRegistro} = slice.actions
export default slice.reducer