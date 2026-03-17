import "./ComponentCSS/WeatherDisplayMain.CSS"

function WeatherDisplayMain()
{
    return(
        <div className="WeatherDisplay">
            <div className="Menu"></div>
            <div className="Location">!Location getter eventaully!</div>
            <div className="TemperatureSection">
                <div className="icon">!icon eventually!</div>
                <div className="Temp">23°C</div>
                <div className="FeelsLike">Feels Like 20°C</div>
            </div>
            <div className="Condition">!image getter eventually!</div>
        </div>
    )
}

export default WeatherDisplayMain