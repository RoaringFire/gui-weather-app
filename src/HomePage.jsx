import "./HomePageStyles.css"
import LocationHeaderSection from "./components/LocationHeaderSection.jsx"
import WeatherHeaderSection from "./components/WeatherHeaderSection.jsx"
import TemperatureHeaderSection from "./components/TemperatureHeaderSection.jsx"

import WeatherForecastTable from './components/WeatherForecastTable.jsx'
import WeatherAdvisoryCard from './components/WeatherAdvisoryCard.jsx'
import TravelConditionsCard from './components/TravelConditionsCard.jsx'
import TravelImpactsCard from './components/TravelImpactsCard.jsx'
import AtmosConditionsCard from "./components/AtmosConditionsCard.jsx"

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="hamburgerMenu">
          
        </div>
        <div className="mainHeader">
          <LocationHeaderSection />
          <TemperatureHeaderSection />
          <WeatherHeaderSection />
        </div>
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
