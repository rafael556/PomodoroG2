import React from 'react';

function TodoForm({ setInputText, todos, setTodos, inputText, pomo, setPomo }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const pomoHandler = (e) => {
    setPomo(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault(); //previnir que a página recarregue

    if(inputText.length === 0){
      alert("Nenhuma tarefa foi digitada, tente novamente");
    // eslint-disable-next-line eqeqeq
    }else if(pomo == ""){
      alert("Escolha a quantidade de pomodoros para esta tarefa")
    }else{
      setTodos([
        ...todos, //caso já tenha algum to do
        {
          text: inputText,
          num: pomo,
          id: Math.random()*1000
        }
      ]);
      setInputText("");
      setPomo("");
    }
  };

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Nova tarefa..." />
      <div className="num-pomo">
        <input value={pomo} onChange={pomoHandler} type="number" name="pomo-num" id="pomo-num" placeholder="ex: 1pom." min="1" />
      </div>
      <button onClick={submitTodoHandler} classNameName="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}

export default TodoForm;
