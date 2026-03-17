import './App.css'
import LocationLabel from "./components/LocationLabel.jsx"
import WeatherForecastTable from './components/WeatherForecastTable.jsx'
import WeatherAdvisoryCard from './components/WeatherAdvisoryCard.jsx'
import TravelConditionsCard from './components/TravelConditionsCard.jsx'
import TravelImpactsCard from './components/TravelImpactsCard.jsx'

function App() {
  return (
    <>
      <div className="container">
        <div className="mainHeader">
          <LocationLabel />
        </div>
        <main className="mainPanel">
          <h1>Today's forecast</h1>
          <WeatherForecastTable />
          <WeatherAdvisoryCard /> 
          <TravelConditionsCard />
          <TravelImpactsCard />
        </main>
      </div>
    </>
  )
}

export default App
