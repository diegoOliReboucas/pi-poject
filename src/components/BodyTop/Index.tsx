import React from 'react'
import * as C from './Styled'
import menuOp from '../../assets/menuH.svg'
import closeMenu from '../../assets/closeMenu.svg'
import user from '../../assets/user.svg'
import location from '../../assets/location.svg'
import padlock from '../../assets/padlock3.svg'
import gear from '../../assets/gear.svg'
import { useNavigate } from 'react-router';
import { useAppSelector } from '../Redux/Hooks/useAppSelector'

export const BodyTop = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const nameUser = useAppSelector(state => state.name)
  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <C.menuOpen open={menuOpen}>
        <C.headerTop>
            <h2>Check</h2>
            <div onClick={() => setMenuOpen(false)}>
              <img src={closeMenu} alt="Close Menu" />
              <p>ocultar</p>
            </div>
          </C.headerTop>
          <C.headerMain>
            <C.imgPerfil></C.imgPerfil>
            <h2>{nameUser.name}</h2>
          </C.headerMain>

          <C.menuBody>
            <ul>
              <li><img src={user} alt="user" /> <p>Perfil</p></li>
              <li><img src={location} alt="location" /> <p>Registro offline</p></li>
              <li><img src={padlock} alt="padlock" /> <p>Alterar senha</p></li>
              <li><img src={gear} alt="gear" /> <p>Configurações</p></li>
            </ul>
          </C.menuBody>

          <C.closeMenuButton onClick={handleClick}>SAIR</C.closeMenuButton>
          <C.bodyFooter>Point Maker (logo)</C.bodyFooter>
      </C.menuOpen>
      <C.Header>
        <C.headerTop>
          <h2>Check</h2>
          <div onClick={() => setMenuOpen(true)}>
            <img src={menuOp} alt="Open Menu" />
            <p>menu</p>
          </div>
        </C.headerTop>
        <C.headerMain>
          <C.imgPerfil></C.imgPerfil>
          <h2>{nameUser.name}</h2>
        </C.headerMain>
      </C.Header>
    </div>
  )
}