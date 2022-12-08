import { useState } from "react";
import { useRef } from "react";
import Tooltip from "./Tooltip";

function TooltipText(props){
  
  let  [tooltipDomRect, setTooltipDomRect] = useState();
  let [showTooltip, setShowTooltip] = useState(false);

  let spanElement = useRef();

  function handleMouseOver(){
    let domData = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(domData);
    setShowTooltip(true);
  }

  return (
  <>
  <span className="tooltip-text" ref={spanElement} onMouseOver={ev => handleMouseOver(ev)} onMouseLeave ={ev => setShowTooltip(false)} >
    {props.children}
  </span>
  {
    showTooltip && <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
  }
  </>
  )
}

export default TooltipText;