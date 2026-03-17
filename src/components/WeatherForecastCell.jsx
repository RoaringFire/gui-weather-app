import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"

function WeatherForecastCell() {
  return (  
    <div className="weatherForecastCell">
      <div>23°C</div>
      <WeatherPartlyCloudy size="50" />
      <div>10 AM</div>
    </div>
  );
}

export default WeatherForecastCell;