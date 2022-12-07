import React from "react";
import Pomodoro from "../assets/tomate.png"
import Reloj from "../assets/reloj.png"
import End from "../assets/end.png"
import "./countdown.css"
import { useState, useEffect } from "react";

function Countdown () {

  let [targetSeconds, setTargetSeconds]=useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);
  
  useEffect(function(){
    if(targetSeconds === null) return ;
    
    setElapsedSeconds(0);

    let interval = setInterval(function (){
      setElapsedSeconds((elapsedSeconds)=> elapsedSeconds + 1)
    },1000);

    return () => {
      clearInterval(interval)
    }

  },[targetSeconds] )

  function parseForm(ev) {
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setTargetSeconds(parseInt(seconds))
  }
  
  if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return (
      <div className="pomodoro">
        <img src={End} alt="Logo" />
        <h2>Termino el conteo!</h2>
        <button onClick={()=> setTargetSeconds(null)}>Reiniciar</button>
      </div>
    )
  }

  if(targetSeconds !== null) {
    return (
      <div className="pomodoro">
        <img src={Reloj} alt="Logo" />
        <h2>Conteo ha iniciado faltan {targetSeconds - elapsedSeconds}'s</h2>
        <h3>(Espere miestras termina el conteo)</h3>
      </div>
    )
  }



  return (
    <div className="pomodoro">
      <img src={Pomodoro} alt="Logo" />
      <h2>Define tu Pomodoro en segundos</h2>
      <form action="#" onSubmit={ev => parseForm(ev)}>
        <input type="number" name="seconds"/>
        <button>Iniciar</button>
      </form>
    </div>
  )
}

export default Countdown;