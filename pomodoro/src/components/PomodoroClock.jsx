import React, { useState, useEffect } from 'react'

import Timer from './Timer'
import '../styles/Clock.css'
import api from '../services/api';

//websocket
import io from "socket.io-client";

const PomodoroClock = (props) => {
  const [breakLength, setBreakLength] = useState(5)
  const [sessionLength, setSessionLength] = useState(25)
  const [longbreakLength, setLongBreakLength] = useState(15)
  const [timerMinute, setTimerMinute] = useState(25)
  const [isPlay, setIsPlay] = useState(false)


  //web socket
  const [toggleUse, setToggleUse] = useState(true)
  function websocket() { toggleUse ? setToggleUse(false) : setToggleUse(true) }

  useEffect(() => {

    //web socket
    const socket = io("http://localhost:8080", { transport: ['websocket'] });
    socket.on("UPDATE", () => {
      websocket()
      console.log("YEAH")
    })

    const loadData = async () => {
      await api.get('/modal').then(response => {
        console.log(response.data)
        setBreakLength(response.data.a)
        setLongBreakLength(response.data.pausaLopausaCurtnga)
        setSessionLength(response.data.pomodoro)
        setTimerMinute(response.data.pomodoro)
      })
    }
    loadData()
  }
    , [toggleUse])

  //atualizar o tempo
  function onUpdateTimerMinute() {
    setTimerMinute(timerMinute - 1)
  }

  //mudar da session pro short break
  function onToggleInterval(isSession) {
    if (isSession) {
      setTimerMinute(sessionLength)
    } else {
      setTimerMinute(breakLength)
    }
  }

  //mudar da session pro long break
  function onToggleInterval2(isSession) {
    if (isSession) {
      setTimerMinute(sessionLength)
    } else {
      setTimerMinute(longbreakLength)
    }
  }

  //parar o tempo que está rodando
  function onPlayStopTimer(isPlaying) {
    setIsPlay(isPlaying)
  }


  //pular o tempo atual: versão short break
  function skipTimer(isSession) {
    if (isSession === false) {
      setTimerMinute(sessionLength)
    } else if (isSession) {
      setTimerMinute(breakLength)
    }
  }

  //pular o tempo atual: bersão long break
  function skipTimer2(isSession) {
    if (isSession === false) {
      setTimerMinute(sessionLength)
    } else if (isSession) {
      setTimerMinute(longbreakLength)
    }
  }

  return (
    <div>
      <Timer
        timerMinute={timerMinute}
        breakLength={breakLength}
        updateTimerMinute={onUpdateTimerMinute}
        toggleInterval={onToggleInterval}
        onToggleInterval2={onToggleInterval2}
        onPlayStopTimer={onPlayStopTimer}
        skipTimer={skipTimer}
        skipTimer2={skipTimer2}
        isPlay={isPlay}
      />
    </div>
  )
}

export default PomodoroClock