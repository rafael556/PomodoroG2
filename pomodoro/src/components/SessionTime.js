import React from 'react';

function SessionTime(props) {

  function increaseSession(){
    if(props.sessionTime === 60){
      return;
    }
    props.increaseSession();
  }

  function decreaseSession(){
    if(props.sessionTime === 1){
      return;
    }
    props.decreaseSession();
  }

  return (
    <section className="session">
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseSession}>
        Down
      </button>

      <p>{props.sessionTime}</p>

      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseSession}>
        Up
      </button>
    </section>
  );
}

export default SessionTime;
