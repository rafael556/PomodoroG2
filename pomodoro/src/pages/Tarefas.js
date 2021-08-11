//PRINCIPAL
//PRINCIPAL
import React, { useState } from 'react'
import '../styles/Tarefas.css'

//importando componentes
<<<<<<< HEAD
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import PomodoroClock from '../components/PomodoroClock';
=======
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import PomodoroClock from '../components/PomodoroClock'
>>>>>>> main

function Tarefas() {
  const [create, setCreate] = useState(false)

  return (
    //relógio em si
    <section className="content">
      <div className="timer">
        <PomodoroClock />
      </div>
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
