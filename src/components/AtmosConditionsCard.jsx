// currently hardcoded. add actual data here (pass the data as props in this widget)
import { useData } from "./useData";

function AtmosConditionsCard({onDragStart,windspeed,visibility,precipitation,humidity,sunset}) {
    const { data} = useData();
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
                        {windspeed}
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
                        <sup>mi</sup>
                    </div>
                    <div className="statsTileDesc">
                        Visibility.
                        <p>Perfectly clear view.</p>
                    </div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        {precipitation}
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
                    <div className="statsTileValue">{sunset}</div>
                    <div className="statsTileDesc">Time of sunset.</div>
                </div>
            </div>
        </div>
    );
}

export default AtmosConditionsCard;