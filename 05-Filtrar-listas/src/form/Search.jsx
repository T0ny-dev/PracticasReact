import { useContext } from "react";
import { SearchContext } from "../Context/ContextSearch";


function Search() {
  const {setSearch} = useContext(SearchContext);
  return (
<input type="text" placeholder="Buscar Framework" onChange={ev => setSearch(ev.target.value)}/>
  )
}

export default Search;