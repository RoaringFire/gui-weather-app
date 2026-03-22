import { useState } from "react"
import "./App.css"
import WeatherDisplayMain from "./Components/WeatherDisplayMain"
import NavBar from "./Components/NavBar"
import HomePage from "./HomePage.jsx"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HomePage />
      <WeatherDisplayMain openMenu={() => setMenuOpen(true)} />
      {menuOpen && <NavBar closeMenu={() => setMenuOpen(false)} />}
    </>
  )
}

export default App