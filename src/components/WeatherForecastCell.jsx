import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"
import { useData } from "./useData";

function WeatherForecastCell({temperature, time}) {
  const {data} = useData();
  return (  
    <div className="weatherForecastCell">
      <div>{temperature} {data.tempUnit}</div>
      <WeatherPartlyCloudy size="50" />
      <div>{time}</div>
    </div>
  );
}

export default WeatherForecastCell;