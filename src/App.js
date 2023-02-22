import React from "react"
import Header from "./Header"

/*
  COMPONENTS - Criando e Usando

  -import React
  -Função que retorna JSX
    -Sempre tem que ter um elemento pai
    -React Fragment <div></div> = <></>
  -Exportar Função
  -Para usar o componente:
    - Importar
    - Usar como tag, exemplo: <App />
  - Componentes podem receber propriedades, exemplo: <Header titulo="texto" />
*/

//JSX -- React transforma isso em HTML
function App() {
  return (
    <>
      <Header titulo="HELLO WORLD" subtitulo="Outro texto" />
      <Header titulo="HELLO WORLD" subtitulo="Outro subtitulo"/>
    </>
  )
}

export default App // syntax sugar == module.export = app