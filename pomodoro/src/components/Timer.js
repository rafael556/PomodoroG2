import React from 'react';


//RELÓGIO PRINCIPAL
class Timer extends React.Component {

  constructor(){
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0
    };

    this.playTimer = this.playTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.skipTimer = this.skipTimer.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
  }

  //fazer o relógio começar a rodar
  playTimer(){
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.props.onPlayStopTimer(true);
    this.setState({
      intervalId: intervalId
    });
  }

  //diminuir o tempo do relógio
  decreaseTimer(){
    switch(this.state.timerSecond){

      //se o valor dos segundos for zero
      case 0:

      //se o valor dos minutos for zero
        if(this.props.timerMinute === 0){
          if(this.state.isSession){
            this.setState({
              isSession: false //intervalo
            });

            //trocar de tarefas para intervalo
            this.props.toggleInterval(this.state.isSession);

          }else{
            this.setState({
              isSession: true //sessão de tarefas
            });

            //trocar de intervalo para tarefas
            this.props.toggleInterval(this.state.isSession);
          }
        }else{
          this.props.updateTimerMinute(); //diminuir o minuto em 1
          this.setState({
            timerSecond: 59 //segundos voltando para 59
          });
        }
        break;

      //se o valor dos segundos não for zero
      default:
        this.setState((prevState) => {
          return{
            timerSecond: prevState.timerSecond - 1 //diminuir 1
          }
        });
        break;
    }
  }

  //parar o tempo atual 
  stopTimer(){
    clearInterval(this.state.intervalId);
    this.props.onPlayStopTimer(false); //criado em PomodoroClock
  }

  //resetar o tempo já passado
  resetTimer(){
    this.stopTimer();
    this.props.resetTimer(); //criado em PomodoroClock
    this.props.onPlayStopTimer(false); //criado em PomodoroClock
    this.setState({
      timerSecond: 0,
      isSession: true
    });
  }

  //pular o tempo
  skipTimer(){
    this.stopTimer();
    this.props.skipTimer(this.state.isSession); //criado em PomodoroClock
    this.props.onPlayStopTimer(false); //criado em PomodoroClock
    this.setState({
      timerSecond: 0,
      isSession: !this.state.isSession //mudar a parte de identificação, se é uma tarefa ou um intervalo
    });
    this.playTimer(); //rodar automaticamente após pular
  }

  render(){
    return (
      <section className="clock-container">
        <section className="timer">

          {/* identificar se está durante uma tarefa ou intervalo */}
          <h4>{this.state.isSession === true ? "Tarefa" : "Short Break"}</h4>

          {/* relógio */}
          <div className="clock">

            {/* minutos */}
            <span>{this.props.timerMinute}</span>

            {/* dois pontinhos */}
            <span>:</span>

            {/* segundos */}
            <span>
            
              {/* aparecer 00 ou aparecer um 0 na frente nos números menores que 10 */}
              {this.state.timerSecond === 0 
              ? "00" 
              : this.state.timerSecond < 10 
              ? "0" + this.state.timerSecond 
              : this.state.timerSecond}
            </span>

          </div>
        </section>

        {/* botões que aparecem embaixo do relógio */}
        <section className="buttons">
              <button onClick={this.playTimer} className="button-play">Play</button>
              <button onClick={this.stopTimer} className="button-stop">Stop</button>
              <button onClick={this.skipTimer} className="button-skip">Skip</button>
              <button onClick={this.resetTimer} className="button-refresh">Refresh</button>
        </section>
      </section>
      
    );
  }
}

export default Timer;
