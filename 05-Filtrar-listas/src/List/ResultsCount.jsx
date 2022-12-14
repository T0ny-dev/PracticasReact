import { useContext } from "react"
import { ItemsContext } from "../Context/ItemsContext"

function ResultsCount() {
  const elements = useContext(ItemsContext)
  return (
    <p>Se encontraron {elements.filter(el => !!el).length} elementos</p>
  )
}

export default ResultsCount;