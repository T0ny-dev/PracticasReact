import { useState } from "react";
import frameWorks from "./items";
import ListView from "./ListView";


function List() {
  let [items, setItems] = useState(frameWorks)

  function filterItems(word){
    if(word === ""){
      setItems(frameWorks);
    } else {
      let newItems = filterWords(word);
      setItems(newItems)
    }
  }

  function filterWords(word) {
    let filterItems = frameWorks.map(item => item.toLocaleLowerCase().includes(word.toLocaleLowerCase()) ? item:null);
    return filterItems
  }

  return (
    <div>
      <ListView elements={items} functionFilter={filterItems} />
    </div>
  )
}

export default List;