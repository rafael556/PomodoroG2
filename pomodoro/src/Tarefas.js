import React, { useState } from 'react';
import './Tarefas.css';

//importando componentes
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Timer from './assets/timer.svg'; //imagem do relógio que será substituída quando o relógio definitivo for feito

function Tarefas() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [pomo, setPomo] = useState([]);

  return (
    //relógio em si
    <section className="content">
      <div className="timer">
        <img src={Timer} alt="timer" />
      </div>
      <div className="Tarefas">
        <h1>Tarefas</h1>

        {/* parte da lista de tarefas */}
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          pomo={pomo}
          setPomo={setPomo}
        /> 

        {/* parte do input para tarefas */}
        <TodoForm 
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          pomo={pomo}
          setPomo={setPomo}
        />
      </div>
    </section>
  );
}

export default Tarefas;