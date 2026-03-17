import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"

function WeatherAdvisoryCard() {
    // hardcoded stuff - this will be replaced with dynamic content
    return (  
        <div className="advisoryCard weatherAdvisory">
            <WeatherPartlyCloudy size="100" />
            <div>
                <div className="advisoryHeader">What to expect</div>
                <p>Partly cloudy conditions expected from 10 AM to 1 PM</p>
            </div>
        </div>
    );
}

export default WeatherAdvisoryCard;