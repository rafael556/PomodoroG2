import React, { useState, useEffect } from 'react'
import '../styles/Modal.css'
import api from '../services/api'

export default function Modal(props) {
  const [pomodoro, setPomodoro] = useState(25)
  const [pausaCurta, setPausaCurta] = useState(5)
  const [pausaLonga, setPausaLonga] = useState(15)

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
            <input type="number" value={pomodoro} onChange={pomo} max="99" />
          </div>

          <div className="formulario">
            <label>Pausa Curta</label>
            <input type="number" value={pausaCurta} onChange={curta} max="99" />
          </div>

          <div className="formulario">
            <label>Pausa Longa</label>
            <input type="number" value={pausaLonga} onChange={longa} max="99" />
          </div>
        </form>

        <button type="submit" form="id-pomodoro">
          Salvar
        </button>
      </div>
    </div>
  )
}
