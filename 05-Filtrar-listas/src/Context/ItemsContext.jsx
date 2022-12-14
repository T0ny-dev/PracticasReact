import { createContext, useContext, useEffect, useState } from "react";
import frameWorks from "../List/items"
import { SearchContext } from "./ContextSearch";

export const ItemsContext = createContext([]);

export function ItemsProvider({children}){
  let [items, setItems] = useState(frameWorks);
  let {search} = useContext(SearchContext);

  useEffect(function(){
    if(!search || search ==="") {
      setItems(frameWorks);
      return ;
    }
    filterItems(search);
  }, [search]);

  function filterItems(word){
    let newItems = filterWords(word);
    setItems(newItems)
  }

  function filterWords(word) {
    let filterItems = frameWorks.map(item => item.toLocaleLowerCase().includes(word.toLocaleLowerCase()) ? item:null);
    return filterItems
  }

  return (
    <ItemsContext.Provider value={items}>
      {children}
    </ItemsContext.Provider>
  )
}