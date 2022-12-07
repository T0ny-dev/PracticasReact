import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './counter/counter'

function App() {

  return (
    <div className="App">
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Counter/>
    </div>
  )
}

export default App
