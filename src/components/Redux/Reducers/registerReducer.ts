import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'registers',
  initialState: {
    dia: 0,
    mes: 1,
    hora: 0,
    minuto: 0,
    semana: 1,   
    ano: 0,
    entraSai: true,
    reg: [
    {hora: '09:00', status: 'entrada', data: '21/09 - ter'}, 
    {hora: '18:00', status: 'saida', data: '22/09 - qua'},
    {hora: '08:58', status: 'entrada', data: '23/09 - qui'}
    ]
  },
  reducers: {
    setDia: (state, action) => {
      state.dia = action.payload
    }, setMes: (state, action) => {
      state.mes = action.payload
    }, setHora: (state, action) => {
      state.hora = action.payload
    }, setMinuto: (state, action) => {
      state.minuto = action.payload
    }, setSemana: (state, action) => {
      state.semana = action.payload
    }, setEntraSai : (state, action) => {
      state.entraSai = action.payload
    }, setAno : (state, action) => {
      state.ano = action.payload
    }, setRegPop : (state, action) => {
      state.reg = action.payload
    }
}});

export const {setDia, setMes, setHora, setMinuto, setSemana, setAno, setEntraSai, setRegPop} = slice.actions
export default slice.reducer