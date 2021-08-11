import React, { useState } from 'react'
import api from '../services/api'

const TodoForm = props => {
  //estados
  const [text, setText] = useState('')
  const [pomo, setPomo] = useState('')

  //lida com o valor do texto
  function TextHandler(e) {
    setText(e.target.value)
  }

  //pomo handler
  function pomoHandler(e) {
    setPomo(e.target.value)
  }

  //Envia as informações do Formulário para o banco
  async function SubmitDBHandler(inputText, pomo) {
    try {
      console.log('teste')
      await api.post('/tarefas', {
        Description: inputText,
        QtdPomo: pomo
      })
      //modifica o estado para recarregar a lista de elementos
      props.setCreate(!props.create)
    } catch (err) {
      console.log('Erro ao admitir elementos')
    }
  }

  const submitTodoHandler = event => {
    event.preventDefault() //previnir que a página recarregue

    if (text.length === 0) {
      //caso nenhuma tarefa seja digitada
      alert('Nenhuma tarefa foi digitada, tente novamente')
    } else if (pomo === '') {
      //caso a pessoa não escolha a quantidade de pomodoros
      alert('Escolha a quantidade de pomodoros para esta tarefa')
    } else {
      //chamada para a função que envia os dados para o banco
      SubmitDBHandler(text, pomo)

      setText('')
      setPomo('')
    }
  }

  return (
    //parte do input para a tarefa, quantidade de pomodoros e botão de adicionar
    <form id="form-todo">
      <input
        value={text}
        onChange={TextHandler}
        type="text"
        className="todo-input"
        placeholder="Nova tarefa..."
      />
      <div className="num-pomo">
        <input
          value={pomo}
          onChange={pomoHandler}
          type="number"
          name="pomo-num"
          id="pomo-num"
          placeholder="ex: 1 pom."
          min="1"
        />
      </div>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  )
}

export default TodoForm
