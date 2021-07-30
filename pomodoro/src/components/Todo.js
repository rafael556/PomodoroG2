import React from 'react';

function Todo({ text, todo, todos, setTodos, num }) {
  
  //deletar tarefa
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  //tarefa completa
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id){
        return{
          ...item,
          completed: !item.completed,
        }
      }
      return item;
    }))
  };

  return (
    <div className="todo">

      {/* cada item lista */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
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
        <li>{num} <br />pom.</li>
      </div>
    </div>
  );
}

export default Todo;
