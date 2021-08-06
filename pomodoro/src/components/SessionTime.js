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
    <section className="control-container">
        <p>Session Time</p>
        <div className="control">
          {/* botão para diminuir o valor */}
          <button 
            className="btn"
            disabled={props.isPlay === true ? "disabled" : ""}
            onClick={decreaseSession}>
            Down
          </button>

          {/* valor do tempo de tarefa em si */}
          <p>{props.sessionTime}</p>

          {/* botão para aumentar o valor */}
          <button 
            className="btn"
            disabled={props.isPlay === true ? "disabled" : ""}
            onClick={increaseSession}>
            Up
          </button>
        </div>
    </section>
  );
}

export default SessionTime;
