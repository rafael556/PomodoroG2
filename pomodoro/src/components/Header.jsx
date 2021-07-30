import React, {useState} from 'react'

import '../styles/Header.css'
import logo from '../assets/Logo-Tomate Vermelho.svg'
import engrenagem from '../assets/Engrenagem.svg'
import Modal from './Modal'

export default props => {
  const [open, setOpen] = useState(false)
  return(
    <div className="Header">
      <img className="logo" src={logo} alt="Logo"/>

      <p>uTask <span>Pomodoro</span></p>

      <img className="engrenagem" src={engrenagem} alt="Engrenagem" onClick={() => setOpen(true)}/>
      {open ? <Modal abertura={setOpen}/> : null}
      
    </div>    
  )
}