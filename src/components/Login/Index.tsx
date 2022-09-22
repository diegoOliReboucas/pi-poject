import React, { useState } from 'react'
import { Input } from '../Input/Index'
import * as C from './Styled'
import { useNavigate } from 'react-router';
import { setHora, setMinuto, setDia, setSemana, setMes, setEntraSai, setAno } from '../Redux/Reducers/registerReducer'
import { useDispatch } from "react-redux"

export const Login = () => {
  const [cadastro, setCadastro] = useState('')
  const [senha, setSenha] = useState('')
  let navigate = useNavigate()
  var dateNow = new Date()
  const dispatch = useDispatch()

  const handleClick = () => {
    navigate('/body')

    dispatch(setHora(dateNow.getHours()))
    dispatch(setMinuto(dateNow.getMinutes()))
    dispatch(setDia(dateNow.getDate()))
    dispatch(setMes(dateNow.getMonth() + 1))
    dispatch(setSemana(dateNow.getDay() - 1))
    dispatch(setAno(dateNow.getFullYear()))
  }

  return (
    <C.Main>
      <h2>Point_Maker</h2>
      <h3>Check</h3>
      <Input text='text' placeholder='Cadastro' value={cadastro} onChange={(e: any) => setCadastro(e.target.value)}/>
      <Input text='password' placeholder='Senha' value={senha} onChange={(e: any) => setSenha(e.target.value)}/>
      <C.Links>
        <p>esqueceu a senha?</p>
        <p>cadastre-se</p>
      </C.Links>
      <C.ButtonLogin onClick={handleClick}>Entrar</C.ButtonLogin>
      <C.LoginFooter>Point Maker (logo)</C.LoginFooter>
    </C.Main>
  )
}