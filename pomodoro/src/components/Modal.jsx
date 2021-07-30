import React, {useState} from 'react'
import '../style/Modal.css'

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

  return(
    <div className="Modal" >
      <div className="Mascara" onClick={() => {props.abertura(false)}}></div>
      <div className="JanelaModal" >
        <h1>Configuração</h1>
        <p>Tempo (minutos)</p>

        <form action="" id="id-pomodoro">
          <div className="formulario">
            <label>Pomodoro</label>
            <input type="number" onChange={pomo}/>
          </div>

          <div className="formulario">
            <label>Pausa Curta</label>
            <input type="number" onChange={curta}/>
          </div>

          <div className="formulario">
            <label>Pausa Longa</label>
            <input type="number" onChange={longa}/>
          </div>
        </form>

        <button type="submit" form="id-pomodoro">Salvar</button>
      </div>
    </div>
  )
}