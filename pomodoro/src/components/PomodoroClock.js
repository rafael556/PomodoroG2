import React from 'react';

import BreakTime from './BreakTime';
import SessionTime from './SessionTime';
import Timer from './Timer';
import '../styles/Clock.css';

class PomodoroClock extends React.Component {
  constructor(){
    super();

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay: false
    }

    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
  }

  onIncreaseBreakLength(){
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength + 1
      }
    });
  }


  onDecreaseBreakLength(){
    this.setState((prevState) => {
      return {
        breakLength: prevState.breakLength - 1
      }
    });
  }


  onIncreaseSessionLength(){
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength + 1,
        timerMinute: prevState.sessionLength + 1 //horário do timer é o mesmo que o da session, aumentando um aumenta o outro
      }
    });
  }

  onDecreaseSessionLength(){
    this.setState((prevState) => {
      return {
        sessionLength: prevState.sessionLength - 1,
        timerMinute: prevState.sessionLength - 1 //horário do timer é o mesmo que o da session, diminuiindo um diminui o outro
      }
    });
  }

  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        timerMinute: prevState.timerMinute - 1
      }
    });
  }

  onToggleInterval(isSession){ //mudar da session pro break
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

  onResetTimer(){
    this.setState({
      timerMinute: this.state.sessionLength
    });
  }

  onPlayStopTimer(isPlay){
    this.setState({
      isPlay: isPlay
    });
  }

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
