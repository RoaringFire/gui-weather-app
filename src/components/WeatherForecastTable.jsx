import WeatherForecastCell from "./WeatherForecastCell";
import { useData } from "./useData"

function WeatherForecastTable({dataList, onDragStart}) {
	const {data} = useData()

	// Updates the displayed temp to be in line with the units
	const convertTemp = (temperature) => {
        if (data.tempUnit === "°F") {
            return Math.round((temperature * 9) / 5 + 32);
        }
        return Math.round(temperature);
    };

  return (
	<div className="weatherForecastTableContainer" onDragStart={onDragStart} draggable>
		<div className="weatherForecastTable">
			{/* Creates a cell for a 12 hr future segment using the passed data*/}
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