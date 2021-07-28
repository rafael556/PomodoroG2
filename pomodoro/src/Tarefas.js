import React, { useState } from 'react';
import './Tarefas.css';

//importando componentes
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function Tarefas() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <section className="content">
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