import React from 'react';

function LongBreakTime(props) {
  function decreaseCounter(){
    if(props.longBreakTime === 1){
      return;
    }
    props.decreaseLongBreak(); //criado em PomodoroClock
  }

  function increaseCounter(){
    if(props.longBreakTime === 60){
      return;
    }
    props.increaseLongBreak(); //criado em PomodoroClock
  }

  return (
    <section className="control-container">
      
        <p>Long Break Time</p>

        <div className="control">
          {/* botão para diminuir o valor */}
          <button 
            className="btn"
            disabled={props.isPlay === true ? "disabled" : ""}
            onClick={decreaseCounter}>
            Down
          </button>

          {/* valor do long break em si */}
          <p>{props.longBreakTime}</p>

          {/* botão para aumentar o valor */}
          <button 
            className="btn"
            disabled={props.isPlay === true ? "disabled" : ""}
            onClick={increaseCounter}>
            Up
          </button>
        </div>
    </section>
  );
}

export default LongBreakTime;