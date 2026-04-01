import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"
import { useData } from "./useData";

function WeatherForecastCell({temperature, time,icon}) {
  const {data} = useData();
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (  
    <div className="weatherForecastCell">
      <div>{temperature} {data.tempUnit}</div>
      <img 
      
        src={iconUrl} 
        style={{ width: 50, height: 50 }}
      />
      <div>{time}</div>
    </div>
  );
}

export default WeatherForecastCell;