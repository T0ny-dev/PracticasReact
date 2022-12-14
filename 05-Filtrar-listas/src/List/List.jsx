import ListView from "./ListView"
import { SearchProvider } from "../Context/ContextSearch";
import { ItemsProvider } from "../Context/ItemsContext";




function List() {
  
  return (
    <SearchProvider>
      <ItemsProvider>
        <ListView/>
      </ItemsProvider>
    </SearchProvider>

  )
}

export default List;