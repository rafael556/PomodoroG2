import React from 'react';
import './Tarefas.css';

import addCircle from './assets/add.svg'; //icon botão adicionar

function Tarefas() {

  function lista(){
    const input = document.getElementById('input');
    const valorInput = input.value;
    input.value = "";

    if(valorInput.length === 0){
      alert("Nenhuma tarefa foi adiconada, tente novamente");
    }else{
      const artigo = document.getElementById('tarefas');

      const div = document.createElement('div');
      artigo.appendChild(div);

      const p = document.createElement('p');
      p.innerHTML = valorInput;
      div.appendChild(p);
    }
    
  }

  return (
    <section>
      <div className="content">

        <h1>Tarefas</h1>
        <div className="underline"></div>

        <div className="tarefas">
          <article id="tarefas">
            {/* onde as tarefas aparecerão */}
          </article>
        </div>

        <div className="input">
          <input type="text" id="input" placeholder="Nova tarefa..." />
          <input type="number" name="num-pomo" id="num-pomo" placeholder="ex: 1 pom." min="1"/>
          <img src={addCircle} alt="botão de adicionar" id="add-btn" onClick={lista} />
        </div>

      </div>
    </section>
  );
}

export default Tarefas;