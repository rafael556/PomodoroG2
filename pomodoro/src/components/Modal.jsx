import React, {useState} from 'react'
import '../styles/Modal.css'
import api from '../services/api'

export default props => {
  const [pomodoro, setPomodoro] = useState(25)
  const [pausaCurta, setPausaCurta] = useState(5)
  const [pausaLonga, setPausaLonga] = useState(15)

  function pomo(e){
    setPomodoro(e.target.value)
  }
  function curta(e){
    setPausaCurta(e.target.value)
  }
  function longa(e){
    setPausaLonga(e.target.value)
  }

  async function submitHandler(e){
    e.preventDefault()

    try{
      await api.post('/modal', {
        pomodoro: pomo,
        pausaCurta: pausaCurta,
        pausaLonga: pausaLonga
      })
    } catch(err){

    }
  }

  return(
    <div className="Modal" >
      <div className="Mascara" onClick={() => {props.abertura(false)}}></div>
      <div className="JanelaModal" >
        <h1>Configuração</h1>
        <p>Tempo (minutos)</p>

        <form onSubmit={submitHandler} id="id-pomodoro">
          <div className="formulario">
            <label>Pomodoro</label>
            <input type="number" value={pomodoro} onChange={pomo} max="99"/>
          </div>

          <div className="formulario">
            <label>Pausa Curta</label>
            <input type="number" value={pausaCurta} onChange={curta} max="99"/>
          </div>

          <div className="formulario">
            <label>Pausa Longa</label>
            <input type="number" value={pausaLonga} onChange={longa} max="99"/>
          </div>
        </form>

        <button type="submit" form="id-pomodoro">Salvar</button>
      </div>
    </div>
  )
}