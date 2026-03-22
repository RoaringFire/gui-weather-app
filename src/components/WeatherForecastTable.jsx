import WeatherForecastCell from "./WeatherForecastCell";

function WeatherForecastTable({data}) {
  return (
	<div className="weatherForecastTableContainer">
		<div className="weatherForecastTable">
			<WeatherForecastCell time="10:00" temperature="23" condition="" />
			<WeatherForecastCell time="11:00" temperature="23" condition="" />
			<WeatherForecastCell time="12:00" temperature="22" condition="" />
			<WeatherForecastCell time="13:00" temperature="22" condition="" />
			<WeatherForecastCell time="14:00" temperature="22" condition="" />
			<WeatherForecastCell time="15:00" temperature="21" condition="" />
			<WeatherForecastCell time="16:00" temperature="20" condition="" />
			<WeatherForecastCell time="17:00" temperature="20" condition="" />
			<WeatherForecastCell time="18:00" temperature="20" condition="" />
			<WeatherForecastCell time="19:00" temperature="20" condition="" />
			<WeatherForecastCell time="20:00" temperature="20" condition="" />
			<WeatherForecastCell time="21:00" temperature="19" condition="" />
			<WeatherForecastCell time="22:00" temperature="19" condition="" />
			<WeatherForecastCell time="23:00" temperature="19" condition="" />
			<WeatherForecastCell time="00:00" temperature="19" condition="" />
		</div>
	</div>
  );
}

export default WeatherForecastTable;