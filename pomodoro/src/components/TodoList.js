import React from 'react';

import Todo from './Todo';

function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">

      {/* para cada to do teremos um componente Todo */}
        {todos.map(todo => (
          <Todo 
            setTodos={setTodos} 
            todos={todos}
            key={todo.id} 
            todo={todo}
            text={todo.text} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
