//PRINCIPAL
//PRINCIPAL
import React, { useState } from 'react'
import '../styles/Tarefas.css'

//importando componentes
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Timer from '../assets/timer.svg' //imagem do relógio que será substituída quando o relógio definitivo for feito

function Tarefas() {
  const [create, setCreate] = useState(false)

  return (
    //relógio em si
    <section className="content">
      <div className="timer">{<img src={Timer} alt="timer" />}</div>
      <div className="Tarefas">
        <h1>Tarefas</h1>

        {/* parte da lista de tarefas */}
        <TodoList create={create} setCreate={setCreate} />

        {/* parte do input para tarefas */}
        <TodoForm create={create} setCreate={setCreate} />
      </div>
    </section>
  )
}

export default Tarefas
