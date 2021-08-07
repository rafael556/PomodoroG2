import React from 'react'
import api from './../services/api'

function Todo({ list, create, setCreate }) {
  //deletar tarefa
  const deleteHandler = async e => {
    await e.preventDefault()

    //deleta e altera o estado de create recarregando a página como consequencia
    await api.delete(`/tarefas/${list._id}`)
    await setCreate(!create)
  }

  //tarefa completa
  const completeHandler = async e => {
    await e.preventDefault()
    await api.put(`/tarefas/${list._id}`, {
      //atualiza o estado da tarefa
      completed: !list.completed
    })
    await setCreate(!create)
  }

  return (
    <div className="todo" key={list._id}>
      {/* cada item lista */}
      <li
        key={list._id}
        className={`todo-item ${list.completed ? 'completed' : ''}`}
      >
        {list.Description}
      </li>

      {/* botões de cada item */}
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>

      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>

      {/* mostrar quantidade de pomodoros */}
      <div className="quant-pomo">
        <li>
          {list.QtdPomo} <br />
          pom.
        </li>
      </div>
    </div>
  )
}

export default Todo
