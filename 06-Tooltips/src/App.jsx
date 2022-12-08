import './App.css'
import TooltipText from './Tooltip/TooltipText'


function App() {


  return (
    <div className="App">
      <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png" width="200" alt="html5 logo, html logo" />
      <p>
          <TooltipText tooltip={"Hyper Text Markup Language"}>HTML</TooltipText> hace referencia al lenguaje de marcado para la elaboración de páginas web. Es un estándar que sirve de referencia del software que conecta con la elaboración de páginas web en sus diferentes versiones, define una estructura básica y un código (denominado código <TooltipText tooltip={"Hyper Text Markup Language"}>HTML</TooltipText>) para la definición de contenido de una página web, como texto, imágenes, videos, juegos, entre otros. Es un estándar a cargo del World Wide Web Consortium (W3C) o Consorcio WWW, organización dedicada a la estandarización de casi todas las tecnologías ligadas a la web, sobre todo en lo referente a su escritura e interpretación
      </p>
    </div>
  )
}

export default App
