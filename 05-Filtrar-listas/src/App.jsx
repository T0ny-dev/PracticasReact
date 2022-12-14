import reactLogo from './assets/react.svg'
import './App.css'
import List from './List/List'
import { SearchProvider } from './Context/ContextSearch'
import { ItemsProvider } from './Context/ItemsContext'

function App() {


  return (
    <div className="App">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo__react" alt="React logo" />
        </a>
        <div>
          <List/>
        </div>
    </div>
  )
}

export default App
