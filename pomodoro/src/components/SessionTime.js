import React from 'react';

function SessionTime(props) {

  function increaseSession(){
    if(props.sessionTime === 60){
      return;
    }
    props.increaseSession(); //criado em PomodoroClock
  }

  function decreaseSession(){
    if(props.sessionTime === 1){
      return;
    }
    props.decreaseSession(); //criado em PomodoroClock
  }

  return (
    <section className="session">

      {/* botão para diminuir o valor */}
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseSession}>
        Down
      </button>

      {/* valor do tempo de tarefa em si */}
      <p>{props.sessionTime}</p>

      {/* botão para aumentar o valor */}
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseSession}>
        Up
      </button>

    </section>
  );
}

export default SessionTime;
