import WeatherForecastCell from "./WeatherForecastCell";

function WeatherForecastTable({data}) {
  return ( 
    <div className="weatherForecastTable">
		<WeatherForecastCell />
		<WeatherForecastCell />
		<WeatherForecastCell />
		<WeatherForecastCell />
		<WeatherForecastCell />
		<WeatherForecastCell />
		<WeatherForecastCell />
    </div>
  );
}

export default WeatherForecastTable;