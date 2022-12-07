import { useState } from "react";
import React from "react";

function Counter () {
  const [contador , setContador] = useState(0)
  return (
    <div>
      <p>Le has dado click al botón  {contador} veces</p>
      <button onClick={()=> {setContador(contador + 1)}}>Incrementar botón </button>
    </div>
  )
}

export default Counter;