import React from 'react'
import * as C from './Styled'
import clock from '../../assets/clock.svg'
import location from '../../assets/location2.svg'
import mapa from '../../assets/mapa.png'
import user from '../../assets/user2.svg'
import arrowLeft from '../../assets/curvedLeft.svg'
import info from '../../assets/info.svg'
import photo from '../../assets/takePhoto.svg'
import { useAppSelector } from '../Redux/Hooks/useAppSelector'
import { setHora, setMinuto, setDia, setSemana, setMes,setEntraSai } from '../Redux/Reducers/registerReducer'
import { useDispatch } from "react-redux"
import { delRegistro, novoRegistro } from '../Redux/Reducers/regReducer'

export const BodyLocation = () => {
  const [locat, setLocat] = React.useState('')
  const [localArea, setLocalArea] = React.useState(false)
  const [photoArea, setPhotoArea] = React.useState(false)
  const [confirmArea, setConfirmArea] = React.useState(false)
  const nameUser = useAppSelector(state => state.name)
  const register = useAppSelector(state => state.register)
  const reg = useAppSelector(state => state.reg)
  const dispatch = useDispatch()
  var dateNow = new Date()
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const diaSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo']
  const [cont, setCont] = React.useState(0)

  const handleConfirm = () => {
    setLocalArea(false)
    setPhotoArea(false)
    setConfirmArea(false)

    dispatch(setHora(dateNow.getHours()))
    dispatch(setMinuto(dateNow.getMinutes()))
    dispatch(setDia(dateNow.getDate()))
    dispatch(setMes(dateNow.getMonth() + 1))
    dispatch(setSemana(dateNow.getDay() - 1))
    dispatch(setEntraSai(!register.entraSai))

      dispatch(delRegistro(reg)) 
      dispatch(novoRegistro({hora: `${register.hora > 9 ? register.hora : '0'+register.hora}:${register.minuto > 9 ? register.minuto : '0'+register.minuto}`, status: `${register.entraSai ? 'entrada' : 'saida'}`, data: `${register.dia}/${register.mes > 9 ? register.mes : '0'+register.mes} - ${diaSemana[register.semana].slice(0, 3).toLowerCase()}`}))
      
   setCont(cont + 1)
  }
  const handlePhotoArea = () => {
    setPhotoArea(true)

    dispatch(setHora(dateNow.getHours()))
    dispatch(setMinuto(dateNow.getMinutes()))
    dispatch(setDia(dateNow.getDate()))
    dispatch(setMes(dateNow.getMonth() + 1))
    dispatch(setSemana(dateNow.getDay() - 1))
    dispatch(setEntraSai(!register.entraSai))
  }

  return (
    <C.Body>
      <C.confLocal openLocal={localArea}>
        <h2>Check</h2>
        <C.Mapa>
          <div>
            <p>{nameUser.name}</p>
            <span>conectado</span>
          </div>
          <img src={mapa} alt="" />
        </C.Mapa>
        <C.confirmLocal onClick={handlePhotoArea}> <img src={user} alt="user" /> </C.confirmLocal>
        <C.Buttons>
          <img onClick={() => setLocalArea(false)} src={arrowLeft} alt="arrow Back" />
          <p>Marcar</p>
          <img src={info} alt="info" />
        </C.Buttons>
      </C.confLocal>

      <C.confFoto openPhoto={photoArea}>
        <h2>Check</h2>
        <C.Foto>
          <p>RECONHECIMENTO FACIAL</p>
          <div><p>CENTRALIZE SEU ROSTO</p></div>
        </C.Foto>
        <C.confirmPhoto onClick={() => setConfirmArea(true)}> <img src={photo} alt="user" /> </C.confirmPhoto>
        <C.Buttons>
          <img onClick={() => setPhotoArea(false)} src={arrowLeft} alt="arrow Back" />
          <img src={info} alt="info" />
        </C.Buttons>
      </C.confFoto>

      <C.pontoRegistrado openCofirma={confirmArea}>
        <C.pontoTop>
        <C.firstH2>Check</C.firstH2>
        <div>
        <h2>Ponto Registrado</h2>
        <p>codigo de registro: 0123456</p>
        </div>
        </C.pontoTop>

        <C.fotoRegistrada></C.fotoRegistrada>

        <C.pontoBottom>
          <h1>{register.hora > 9 ? register.hora : '0'+register.hora}:{register.minuto > 9 ? register.minuto : '0'+register.minuto}</h1>
          <p>{register.dia} DE {meses[register.mes - 1].toUpperCase()} DE {register.ano} <span>{diaSemana[register.semana].toUpperCase()}</span> </p>
          <h2>{nameUser.name}</h2>
          <button onClick={handleConfirm}>CONCLUIR</button>

          <C.Buttons>
          <img onClick={() => setConfirmArea(false)} src={arrowLeft} alt="arrow Back" />
          <img src={info} alt="info" />
        </C.Buttons>
        </C.pontoBottom>

      </C.pontoRegistrado>

    <C.Main>
      <C.Data>
        <img src={clock} alt="clock" />
        <p> {register.hora > 9 ? register.hora : '0'+register.hora}:{register.minuto > 9 ? register.minuto : '0'+register.minuto} | {register.dia} de {meses[register.mes - 1]}, {register.ano}</p>
      </C.Data>
      <C.Location>
        <input type="text" value={locat} onChange={(e) => setLocat(e.target.value)}/>
        <div>
          <img src={location} alt="" />
        </div>
      </C.Location>
      <C.buttonPonto onClick={() => setLocalArea(true)}>BATER PONTO</C.buttonPonto>
    </C.Main>
    </C.Body>
  )
}