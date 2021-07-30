import React from 'react';

function TodoForm({ setInputText, todos, setTodos, inputText, pomo, setPomo }) {
  
  //salvar o que foi escrito
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //salvar o número de pomodoros escolhido 
  const pomoHandler = (e) => {
    setPomo(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault(); //previnir que a página recarregue

    if(inputText.length === 0){ //caso nenhuma tarefa seja digitada
      alert("Nenhuma tarefa foi digitada, tente novamente");
    // eslint-disable-next-line eqeqeq
    }else if(pomo == ""){ //caso a pessoa não escolha a quantidade de pomodoros
      alert("Escolha a quantidade de pomodoros para esta tarefa")
    }else{
      setTodos([
        ...todos, //caso já tenha algum to do
        {
          text: inputText, //tarefa
          num: pomo, //quantidade de pomodoros
          id: Math.random()*1000 //id aleatório
        }
      ]);
      setInputText("");
      setPomo("");
    }
  };

  return (
    //parte do input para a tarefa, quantidade de pomodoros e botão de adicionar
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
