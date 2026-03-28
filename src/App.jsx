import { BrowserRouter } from 'react-router-dom'

import './App.css'
import HomePage from "./HomePage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </>
  )
}


export default App