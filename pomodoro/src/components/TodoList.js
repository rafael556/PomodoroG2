import React from 'react';

import Todo from './Todo';

function TodoList({ todos, setTodos, pomo, setPomo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">

      {/* para cada todo teremos um componente Todo */}
        {todos.map(todo => (
          <Todo 
            setTodos={setTodos} 
            todos={todos}
            key={todo.id} 
            todo={todo}
            text={todo.text}  
            pomo={pomo}
            setPomo={setPomo}
            num={todo.num}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
