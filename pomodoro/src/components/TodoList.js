import React, { useState, useEffect } from 'react'
import api from '../services/api'
import Todo from './Todo'

function TodoList(props) {
  const [lista, setLista] = useState([])

  useEffect(() => {
    api
      .get('/tarefas')
      .then(resp => {
        console.log(resp.data)
        setLista(resp.data)
      })

      .catch(err => {
        console.log('Erro')
      })
  }, [props.create])

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* para cada todo teremos um componente Todo */}
        {lista.map(list => (
          <Todo list={list} create={props.create} setCreate={props.setCreate} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
