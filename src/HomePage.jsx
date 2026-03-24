import { useState } from "react";

import "./styles/HomePageStyles.css";
import NavBar from "./components/NavBar.jsx";
import WeatherDisplayMain from "./components/WeatherDisplayMain.jsx";

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
        <WeatherDisplayMain menuOpen={menuOpen} openMenu={() => setMenuOpen(true)} closeMenu={() => setMenuOpen(false)} />
        {menuOpen && <NavBar closeMenu={() => setMenuOpen(false)} />}
          
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
