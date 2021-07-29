import React, { useState } from 'react';
import './Tarefas.css';

//importando componentes
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Timer from './assets/timer.svg';

function Tarefas() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
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
        /> 

        
        {/* parte do input para tarefas */}
        <TodoForm 
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
        />
      </div>
    </section>
  );
}

export default Tarefas;