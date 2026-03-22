import TemperatureIcon from "./vector_icons/TemperatureIcon.jsx";

function TemperatureHeaderSection() {
    return ( 
        <div id="temperatureHeaderSection">
            <div className="actualTemp">
                23°C
            </div>
            <div className="divider"></div>
            <div className="feelsLikeTemp">
                Feels like 20°C
            </div>
        </div>
    );
}

export default TemperatureHeaderSection;