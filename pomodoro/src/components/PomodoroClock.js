import React from 'react';

import Timer from './Timer';
import '../styles/Clock.css';

class PomodoroClock extends React.Component {
  constructor(){
    super();

    this.state = {
      breakLength: localStorage.getItem('pausaCurta'),
      sessionLength: localStorage.getItem('pomodoro'),
      longBreakLength: localStorage.getItem('pausaLonga'),
      timerMinute: localStorage.getItem('pomodoro'),
      isPlay: false
    }

    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onPlayStopTimer = this.onPlayStopTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
    this.skipTimer2 = this.skipTimer2.bind(this);
    this.onToggleInterval2 = this.onToggleInterval2.bind(this);
  }

    //atualizar o tempo
  onUpdateTimerMinute(){
    this.setState((prevState) => {
      return{
        timerMinute: prevState.timerMinute - 1
      }
    });
  }

  //mudar da session pro short break
  onToggleInterval(isSession){ 
    if(isSession){ 
      this.setState({
        timerMinute: localStorage.getItem('pomodoro')
      });
    }else{
      this.setState({
        timerMinute: localStorage.getItem('pausaCurta')
      });
    }
  }

  //mudar da session pro long break
  onToggleInterval2(isSession){ 
    if(isSession){ 
      this.setState({
        timerMinute: localStorage.getItem('pomodoro')
      });
    }else{
      this.setState({
        timerMinute: localStorage.getItem('pausaLonga')
      });
    }
  }

  //parar o tempo que está rodando
  onPlayStopTimer(isPlay){
    this.setState({
      isPlay: isPlay
    });
  }


  //pular o tempo atual: versão short break
  skipTimer(isSession){
    if(isSession===false){
      this.setState({
        timerMinute: localStorage.getItem('pomodoro')
      });
    }else if(isSession===true){
      this.setState({
        timerMinute: localStorage.getItem('pausaCurta')
      });
    }
  }

    //pular o tempo atual: bersão long break
    skipTimer2(isSession){
      if(isSession===false){
        this.setState({
          timerMinute: localStorage.getItem('pomodoro')
        });
      }else if(isSession===true){
        this.setState({
          timerMinute: localStorage.getItem('pausaLonga')
        });
      }
    }

  render(){
    return (
      <div>   
        <Timer 
          timerMinute={this.state.timerMinute} 
          breakLength={this.state.breakLength}
          updateTimerMinute={this.onUpdateTimerMinute}
          toggleInterval={this.onToggleInterval}
          onToggleInterval2={this.onToggleInterval2}
          onPlayStopTimer={this.onPlayStopTimer}
          skipTimer={this.skipTimer}
          skipTimer2={this.skipTimer2}
         />
      </div>
    );
  }
  
}

export default PomodoroClock;
