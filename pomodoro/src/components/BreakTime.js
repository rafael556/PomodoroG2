import React from 'react';

function BreakTime(props) {
  function decreaseCounter(){
    if(props.breakTime === 1){
      return;
    }
    props.decreaseBreak();
  }

  function increaseCounter(){
    if(props.breakTime === 60){
      return;
    }
    props.increaseBreak();
  }

  return (
    <section className="break">
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseCounter}>
        Down
      </button>

      <p>{props.breakTime}</p>

      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}>
        Up
      </button>
    </section>
  );
}

export default BreakTime;
