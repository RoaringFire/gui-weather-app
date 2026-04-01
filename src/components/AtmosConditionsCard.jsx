// currently hardcoded. add actual data here (pass the data as props in this widget)
import { useData } from "./useData";

function AtmosConditionsCard({onDragStart,windspeed,visibility,precipitation,humidity,sunset,timeZone,airIndex}) {
    const { data } = useData();

    const airPollutionType = ["Good","Fair","Moderate","Poor","Very Poor"]
    const airPollutionMessage = [
        "Enjoy your usual outdoor activities.",
        "Air quality is acceptable; consider limiting prolonged outdoor exertion if you're sensitive.",
        "Moderate risk: sensitive individuals should reduce prolonged or heavy outdoor activity.",
        "Poor air quality: limit outdoor activities, especially strenuous exercise.",
        "Very poor air quality: avoid outdoor activities and stay indoors as much as possible."
    ];

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

    const convertVisibility = () =>{
        if (data.visibilityUnit === "km"){
            return Math.round(visibility * 0.001 * 100) / 100
        }

        if (data.visibilityUnit === "mile"){
            return Math.round(visibility * 0.000621 * 100) / 100
        }
        return 10
    }

    const convertedVisibility = convertVisibility();

    return (
        <div onDragStart={onDragStart} draggable>
            <div className="statsTileContainer">
                {data.airPollutionVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">{airIndex}</div>
                    <div className="statsTileDesc">
                        Air pollution.
                        <p>{airPollutionType[airIndex -1]}</p>
                        <p>{airPollutionMessage[airIndex -1]}</p>
                    </div>
                </div>}

                {data.windSpeedVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {convertedWindSpeed}
                        <sup>{data.windSpeedUnit}</sup>
                    </div>
                    <div className="statsTileDesc">
                        Wind speed.
                    </div>
                </div>}
            </div>

            <div className="statsTileContainer">
                {data.visibilityMetricVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {convertedVisibility}
                        <sup>{data.visibilityUnit}</sup>
                    </div>
                    <div className="statsTileDesc">
                        Visibility.
                    </div>
                </div>}

                {data.precipitationVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {convertedRainfall}
                        <sup>{data.rainUnit}</sup>
                    </div>
                    <div className="statsTileDesc">Precipitation.</div>
                </div>}
            </div>

            <div className="statsTileContainer">
                {data.humidityVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {humidity}
                        <sup>%</sup>
                    </div>
                    <div className="statsTileDesc">Humidity</div>
                </div>}

                {data.sunsetTimeVisible &&
                <div className="statsTileCard">
                    <div className="statsTileValue">{convertedSunset}</div>
                    <div className="statsTileDesc">Time of sunset.</div>
                </div>}
            </div>
        </div>
    );
}

export default AtmosConditionsCard;