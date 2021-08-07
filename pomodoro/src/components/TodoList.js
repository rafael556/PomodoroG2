import React, { useState, useEffect } from 'react'
import api from '../services/api'
import Todo from './Todo'

function TodoList(props) {
  //contem o array dinamico das tarefas
  const [lista, setLista] = useState([])

  //faz a chamada novamente/recarrega sempre que mudar a variavel create
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
          //passa create para a mudança de estado e recarregamento nos botões da aplicação
          <Todo
            list={list}
            create={props.create}
            setCreate={props.setCreate}
            key={list._id}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
