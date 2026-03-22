import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"

function WeatherForecastCell({temperature, time, condition}) {
  return (  
    <div className="weatherForecastCell">
      <div>{temperature}°C</div>
      <WeatherPartlyCloudy size="50" />
      <div>{time}</div>
    </div>
  );
}

export default WeatherForecastCell;