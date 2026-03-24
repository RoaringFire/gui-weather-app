import { useState } from "react";

// header components
import NavBar from "./components/Navbar.jsx";
import WeatherDisplayMain from "./components/FrontPageHeader.jsx";

// main content components
import "./styles/FrontPageMainStyles.css";
import WeatherForecastTable from './components/WeatherForecastTable.jsx'
import WeatherAdvisoryCard from './components/WeatherAdvisoryCard.jsx'
import TravelConditionsCard from './components/TravelConditionsCard.jsx'
import TravelImpactsCard from './components/TravelImpactsCard.jsx'
import AtmosConditionsCard from "./components/AtmosConditionsCard.jsx"

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="container">
        <header>
          <WeatherDisplayMain menuOpen={menuOpen} openMenu={() => setMenuOpen(true)} closeMenu={() => setMenuOpen(false)} />
          {menuOpen && <NavBar closeMenu={() => setMenuOpen(false)} />}
        </header>
          
        <main className="mainPanel">
          <h1>Today's forecast</h1>
          <WeatherForecastTable />
          <WeatherAdvisoryCard />
          <AtmosConditionsCard />
          <TravelConditionsCard />
          <TravelImpactsCard />
        </main>
      </div>
    </>
  )
}

export default HomePage
