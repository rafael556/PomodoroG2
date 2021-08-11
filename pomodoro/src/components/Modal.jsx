<<<<<<< HEAD
/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> main
import '../styles/Modal.css'
import api from '../services/api'
import { useHistory } from 'react-router-dom';

<<<<<<< HEAD

export default props => {
  const [pomodoro, setPomodoro] = useState(localStorage.getItem('pomodoro'))
  const [pausaCurta, setPausaCurta] = useState(localStorage.getItem('pausaCurta'))
  const [pausaLonga, setPausaLonga] = useState(localStorage.getItem('pausaLonga'))

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave,valor);
  }

  function salvar(){
    armazenar('pomodoro', pomodoro);
    armazenar('pausaCurta', pausaCurta);
    armazenar('pausaLonga', pausaLonga);
    
    props.abertura(false)
    document.location.reload(true);
  }
=======
export default function Modal(props) {
  const [pomodoro, setPomodoro] = useState(25)
  const [pausaCurta, setPausaCurta] = useState(5)
  const [pausaLonga, setPausaLonga] = useState(15)
>>>>>>> main

  function pomo(e) {
    setPomodoro(e.target.value)
  }
  function curta(e) {
    setPausaCurta(e.target.value)
  }
  function longa(e) {
    setPausaLonga(e.target.value)
  }

  useEffect( () => {
    try{
      api.get('/modal').then(response => {
        const resposta = response.data
        setPomodoro(resposta.pomodoro)
        setPausaCurta(resposta.pausaCurta)
        setPausaLonga(resposta.pausaLonga)
      })
    }catch(err){
      console.log('err')
    }
  },[])
  
  async function submitHandler(e) {
    e.preventDefault()

    try {
      await api
        .put('/modal', {
          pomodoro: pomodoro,
          pausaCurta: pausaCurta,
          pausaLonga: pausaLonga
        })
        .then(response => console.log(response.data))
    } catch (err) {
      console.log('failed to update')
    }
  }

  return (
    <div className="Modal">
      <div
        className="Mascara"
        onClick={() => {
          props.abertura(false)
        }}
      ></div>
      <div className="JanelaModal">
        <h1>Configuração</h1>
        <p>Tempo (minutos)</p>

        <form onSubmit={submitHandler} id="id-pomodoro">
          <div className="formulario">
            <label>Pomodoro</label>
<<<<<<< HEAD
            <input type="number" value={pomodoro} onChange={pomo} max="99" min="1"/>
=======
            <input type="number" value={pomodoro} onChange={pomo} max="99" />
>>>>>>> main
          </div>

          <div className="formulario">
            <label>Pausa Curta</label>
<<<<<<< HEAD
            <input type="number" value={pausaCurta} onChange={curta} max="99" min="1"/>
=======
            <input type="number" value={pausaCurta} onChange={curta} max="99" />
>>>>>>> main
          </div>

          <div className="formulario">
            <label>Pausa Longa</label>
<<<<<<< HEAD
            <input type="number" value={pausaLonga} onChange={longa} max="99" min="1"/>
          </div>
        </form>

        <button 
          type="submit" 
          form="id-pomodoro" 
          onClick={salvar}
        >Salvar</button>

=======
            <input type="number" value={pausaLonga} onChange={longa} max="99" />
          </div>
        </form>

        <button type="submit" form="id-pomodoro">
          Salvar
        </button>
>>>>>>> main
      </div>
    </div>
  )
}
