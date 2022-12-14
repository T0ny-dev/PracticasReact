import { useContext } from "react";
import { ItemsContext } from "../Context/ItemsContext";
import Search from "../form/Search";
import ResultsCount from "../List/ResultsCount"
import "./listview.css"


function ListView() {
  let elements = useContext(ItemsContext)
  return (
    <div>
      <Search/>
      <ResultsCount></ResultsCount>
      <ul className="list">
        {elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)}
      </ul>
    </div>
  )
}

export default ListView;