import WeatherForecastCell from "./WeatherForecastCell";
import { useData } from "./useData"

function WeatherForecastTable({dataList, onDragStart}) {
	const {data} = useData();
	const convertTemp = (temperature) => {
        if (data.tempUnit === "°F") {
            return Math.round((temperature * 9) / 5 + 32);
        }
        return Math.round(temperature);
    };
  return (
	<div className="weatherForecastTableContainer" onDragStart={onDragStart} draggable>
		<div className="weatherForecastTable">
			<WeatherForecastCell time={dataList[1].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[1].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[2].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[2].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[3].dt_txt.slice(11, 16)}temperature={convertTemp(dataList[3].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[4].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[4].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[5].dt_txt.slice(11, 16)}temperature={convertTemp(dataList[5].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[6].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[6].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[7].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[7].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[8].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[8].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[9].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[9].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[10].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[10].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[11].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[11].main.temp)} condition="" />
			<WeatherForecastCell time={dataList[12].dt_txt.slice(11, 16)} temperature={convertTemp(dataList[12].main.temp)} condition="" />
		</div>
	</div>
  );
}

export default WeatherForecastTable;