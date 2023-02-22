import React from 'react'  // syntax sugar
import ReactDOM from 'react-dom/client'

import App from './App'


// JSX === html que o react irá gerar para a gente
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)