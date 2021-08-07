/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'
import '../styles/Modal.css'
import api from '../services/api'


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
            <input type="number" value={pomodoro} onChange={pomo} max="99" min="1"/>
          </div>

          <div className="formulario">
            <label>Pausa Curta</label>
            <input type="number" value={pausaCurta} onChange={curta} max="99" min="1"/>
          </div>

          <div className="formulario">
            <label>Pausa Longa</label>
            <input type="number" value={pausaLonga} onChange={longa} max="99" min="1"/>
          </div>
        </form>

        <button 
          type="submit" 
          form="id-pomodoro" 
          onClick={salvar}
        >Salvar</button>

      </div>
    </div>
  )
}