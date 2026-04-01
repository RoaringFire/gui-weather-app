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
			{dataList.slice(1, 22).map((item, index) => (
				<WeatherForecastCell
					key={index}
					time={item.dt_txt.slice(11, 16)}
					temperature={convertTemp(item.main.temp)}
					icon={item.weather[0].icon}
				/>
			))}
		</div>
	</div>
  );
}

export default WeatherForecastTable;