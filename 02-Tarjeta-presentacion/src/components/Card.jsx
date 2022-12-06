import Avatar from "../assets/cvtonypng.png"
import React from "react";
import reactLogo from '../assets/react.svg'
import "./card.css"


const Card = () => {
  return (
    <div className="card">
      <img src={Avatar} alt="avatar"/>
      <h1><a href="https://github.com/T0ny-dev">@Tony-dev</a></h1>
      <h3>Ingeniero Industrial y Administrador / Full Stack Developer 🚀</h3>
      <div className="card__links">
      <button className="primary__button">Github</button>
      <button className="primary__button">Linkedin</button>
      <button className="primary__button">Website</button>
      </div>
      <div className="card__footer">
      <img src={reactLogo} alt="logo" />
      </div>
    </div>
  )
}

export default Card;