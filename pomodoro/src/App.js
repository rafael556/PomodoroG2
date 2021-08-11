import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import Routes from './services/routes'

function App() {
  return (
    <div>

      <BrowserRouter>
      <Header />
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
