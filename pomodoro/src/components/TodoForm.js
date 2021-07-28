import React from 'react';

function TodoForm({ setInputText, todos, setTodos, inputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault(); //previnir que a página recarregue

    if(inputText.length === 0){
      alert("Nenhuma tarefa foi digitada, tente novamente");
    }else{
      setTodos([
        ...todos, //caso já tenha algum to do
        {
          text: inputText,
          id: Math.random()*1000
        }
      ]);
    }
    setInputText("");
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Nova tarefa..." />
      <div className="num-pomo">
      <select name="pomo-num" id="pomo-num" placeholder="ex: 1 pom.">
        <option value="1 pom.">1 pom.</option>
        <option value="1 pom.">2 pom.</option>
        <option value="1 pom.">3 pom.</option>
        <option value="1 pom.">4 pom.</option>
        <option value="1 pom.">5 pom.</option>
        <option value="1 pom.">6 pom.</option>
        <option value="1 pom.">7 pom.</option>
        <option value="1 pom.">8 pom.</option>
        <option value="1 pom.">9 pom.</option>
        <option value="1 pom.">10 pom.</option>
      </select>
      </div>
      <button onClick={submitTodoHandler} classNameName="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default TodoForm;
