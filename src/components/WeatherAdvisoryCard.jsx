import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"

function WeatherAdvisoryCard() {
    // hardcoded stuff - this will be replaced with dynamic content
    return (  
        <div className="advisoryCard weatherAdvisory">
            <div>
                <div className="advisoryHeader">Weather conditions</div>
                <p>Partly cloudy conditions expected for the rest of the day.</p>
                <p><strong>Advice:</strong></p>
                <div className="weatherAdviceLabel">
                    💡- Additional clothing (e.g. rainwear and warm clothing) may not be necessary.
                </div>
                <div className="weatherAdviceLabel">
                    💡- Be aware of possible sudden temperature changes at later times.
                </div>
            </div>
        </div>
    );
}

export default WeatherAdvisoryCard;