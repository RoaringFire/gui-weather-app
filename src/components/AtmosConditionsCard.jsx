// currently hardcoded. add actual data here (pass the data as props in this widget)
import { useData } from "./useData";

function AtmosConditionsCard({onDragStart,windspeed,visibility,precipitation,humidity,sunset,timeZone}) {
    const { data} = useData();

    const convertedSunset = new Date((sunset + timeZone) * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        });;
    
    const convertWindSpeed = () => {
        if (data.windSpeedUnit === "mph") {
            return Math.round(windspeed * 2.24);
        }

        if (data.windSpeedUnit === "kmh") {
            return Math.round(windspeed * 3.6);
        }

        return Math.round(windspeed);
    };

    const convertedWindSpeed = convertWindSpeed(); 

    const convertRainFall = () =>{
        if (data.rainUnit === "in"){
            return Math.round(precipitation * 0.04 * 100) / 100
        }
        return precipitation
    }

    const convertedRainfall = convertRainFall();

    return (
        <div onDragStart={onDragStart} draggable>
            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">2</div>
                    <div className="statsTileDesc">
                        Air pollution.
                        <p>Low pollution.</p>
                        <p>Enjoy your usual outdoor activities.</p>
                    </div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {convertedWindSpeed}
                        <sup>{data.windSpeedUnit}</sup>
                    </div>
                    <div className="statsTileDesc">
                        Wind speed.
                    </div>
                </div>
            </div>

            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {visibility}
                        <sup>m</sup>
                    </div>
                    <div className="statsTileDesc">
                        Visibility.
                        <p>Perfectly clear view.</p>
                    </div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {convertedRainfall}
                        <sup>{data.rainUnit}</sup>
                    </div>
                    <div className="statsTileDesc">Precipitation.</div>
                </div>
            </div>

            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {humidity}
                        <sup>%</sup>
                    </div>
                    <div className="statsTileDesc">Humidity</div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">{convertedSunset}</div>
                    <div className="statsTileDesc">Time of sunset.</div>
                </div>
            </div>
        </div>
    );
}

export default AtmosConditionsCard;