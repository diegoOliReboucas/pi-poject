import React, { useEffect } from 'react'
import { useAppSelector } from '../Redux/Hooks/useAppSelector'
import { useDispatch } from "react-redux"
import * as C from './Styled'
import { setHora, setMinuto, setDia, setSemana, setMes,setEntraSai, setRegPop } from '../Redux/Reducers/registerReducer'
import { novoRegistro, delRegistro } from '../Redux/Reducers/regReducer'

export const BodyUltRegistros = () => {
  const register = useAppSelector(state => state.register)
  const reg = useAppSelector(state => state.reg)
    const [cont, setCont] = React.useState(0)
    var dateNow = new Date()
  const diaSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo']


  return (
    <C.Main>
      <p >ultimos registros</p>
      <C.Itens>
      {reg.map((item, index) => (
        <C.Item key={index}>
          <C.itemInside>
            <p> {item.status === 'entrada' ? '🡸' : '🡺'} {item.hora}</p>
            <span>{item.status}</span>
          </C.itemInside>
          <C.itemOutside style={{color: 'black'}}>{item.data}</C.itemOutside>
        </C.Item>
      ))}
      </C.Itens>
    </C.Main>
  )
}