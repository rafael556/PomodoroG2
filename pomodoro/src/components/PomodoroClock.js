import React from 'react';

import BreakTime from './BreakTime';
import SessionTime from './SessionTime';
import LongBreakTime from './LongBreakTime';
import Timer from './Timer';
import '../styles/Clock.css';

class PomodoroClock extends React.Component {
  constructor(){
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      longBreakLength: 15,
      timerMinute: 25,
      isPlay: false
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onIncreaseLongBreakLength = this.onIncreaseLongBreakLength.bind(this);
    this.onDecreaseLongBreakLength = this.onDecreaseLongBreakLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
  }

  //aumentar de 1 em 1 o tempo do intervalo
  onIncreaseBreakLength(){
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    });
  }

  //diminuir de 1 em 1 o tempo do intervalo
  onDecreaseBreakLength(){
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    });
  }

  //aumentar de 1 em 1 o tempo da sessão de tarefa
  onIncreaseSessionLength(){
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1 //horário do timer é o mesmo que o da session, aumentando um aumenta o outro
      }
    });
  }

  //dimimuir de 1 em 1 o tempo da sessão de tarefa
  onDecreaseSessionLength(){
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1 //horário do timer é o mesmo que o da session, diminuindo um diminui o outro
      }
    });
  }

  //aumentar de 1 em 1 o tempo do long break
  onIncreaseLongBreakLength(){
    this.setState((prevState) => {
      return {
        longBreakLength: prevState.longBreakLength + 1
      }
    });
  }

  //diminuir de 1 em 1 o tempo do long break
  onDecreaseLongBreakLength(){
    this.setState((prevState) => {
      return {
        longBreakLength: prevState.longBreakLength - 1
      }
    });
  }


  //atualizar o tempo
  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        timerMinute: prevState.timerMinute - 1
      }
    });
  }


  //mudar da session pro break
  onToggleInterval(isSession){ 
    if(isSession){ 
      this.setState({
        timerMinute: this.state.sessionLength
      });
    }else{
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  }


  //resetar o tempo já passado
  onResetTimer(){
    this.setState({
      timerMinute: this.state.sessionLength
    });
  }


  //parar o tempo que está rodando
  onPlayStopTimer(isPlay){
    this.setState({
      isPlay: isPlay
    });
  }


  //pular o tempo atual
  skipTimer(isSession){
    if(isSession===false){
      this.setState({
        timerMinute: this.state.sessionLength
      });
    }else if(isSession===true){
      this.setState({
        timerMinute: this.state.breakLength
      });
    }
  }

  render(){
    return (
      <div>
        <BreakTime 
          isPlay={this.state.isPlay}
          breakTime={this.state.breakLength} 
          increaseBreak={this.onIncreaseBreakLength}
          decreaseBreak={this.onDecreaseBreakLength}
        />
        <SessionTime 
          isPlay={this.state.isPlay}
          sessionTime={this.state.sessionLength} 
          increaseSession={this.onIncreaseSessionLength}
          decreaseSession={this.onDecreaseSessionLength}
        />

        <LongBreakTime 
          isPlay={this.state.isPlay}
          longBreakTime={this.state.longBreakLength} 
          increaseLongBreak={this.onIncreaseLongBreakLength}
          decreaseLongBreak={this.onDecreaseLongBreakLength}
        />

        <Timer 
          timerMinute={this.state.timerMinute} 
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          resetTimer={this.onResetTimer}
          onPlayStopTimer={this.onPlayStopTimer}
          skipTimer={this.skipTimer}
         />
      </div>
    );
  }
  
}

export default PomodoroClock;
