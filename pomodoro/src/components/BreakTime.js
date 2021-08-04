import React from 'react';

function BreakTime(props) {

  function decreaseCounter(){
    //não ser menor que 1
    if(props.breakTime === 1){
      return;
    }
    props.decreaseBreak(); //criado em PomodoroClock
  }


  function increaseCounter(){
    if(props.breakTime === 60){
      return;
    }
    props.increaseBreak(); //criado em PomodoroClock
  }

  return (
    <section className="break">

      {/* botão para diminuir o valor */}
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={decreaseCounter}>
        Down
      </button>

      {/* valor do short break em si */}
      <p>{props.breakTime}</p>

      {/* botão para aumentar o valor */}
      <button 
        disabled={props.isPlay === true ? "disabled" : ""}
        onClick={increaseCounter}>
        Up
      </button>

    </section>
  );
}

export default BreakTime;
