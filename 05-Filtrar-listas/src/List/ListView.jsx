import "./listview.css"


function ListView({elements, functionFilter}) {
  return (
    <div>
      <input type="text" placeholder="Buscar Framework" onChange={ev => functionFilter(ev.target.value)}/>
      <ul className="list">
        {elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)}
      </ul>
    </div>
  )
}

export default ListView;