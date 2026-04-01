import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"
import { useData } from "./useData";
import { data } from "react-router-dom";

var tempAdvicesList = {
    "freezing": "It's freezing! Wear gloves, a scarf and a thick coat before your journey.",
    "chilly": "It's cold. Wear a warm jacket or sweater before your journey",
    "warm": "It's pleasantly warm. Wear clothing you can easily remove, such as light jackets and hoodies.",
    "hot": "It's hot! Stay hydrated and bring a bottle of water, and wear light clothing.", 
};

var weatherAdvicesList = {
    "Rain": [
        "Don't get wet! Bring an umbrella, raincoat and waterproof shoes for your journey.",
        "Expect potential delays with bus and rail. Allow plenty of time for your journey.",
    ],
    "Clear": [
        "Avoid direct contact with the sunlight during the day when possible.",
    ],
    "Thunderstorm": [
        "Stay safe! Use public transport when possible.",
        "Avoid waiting near metal poles, railings and inside open spaces."
    ],
    "Clouds": [
        "Be aware of sudden temperature changes and short showers at later times.",
        "Try and bring additional clothing with you in case of any sudden weather changes."
    ],
    "Snow": [
        "Expect major delays with most public transport, including bus and rail. Allow ample journey time.",
        "Snow can be slippery! Wear a pair of good grip shoes before your journey."
    ],
    "Fog": [
        "Low visibility conditions. Expect public transport delays and allow ample time for your journey.",
        "Stay alert at crossings and platforms for any oncoming traffic."
    ]
};

function WeatherAdvisoryCard({onDragStart,weatherType,temperature}) {

    const{data} = useData();

    // uses the values of the settings to display an appropriate temp value
    const getWeatherRange = () => {
        if (temperature > data.minimumHotTemp){
            return tempAdvicesList["hot"]
        }

        if (temperature > data.minimumWarmTemp){
            return tempAdvicesList["warm"]
        }

        if (temperature > data.minimumChillyTemp){
            return tempAdvicesList["chilly"]
        }

        return tempAdvicesList["freezing"]
    }

    return (  
        <div className="advisoryCard weatherAdvisory" onDragStart={onDragStart} draggable>
            <div>
                <p><strong>Advice:</strong></p>
                <div className="weatherAdviceLabel">
                    💡- {weatherAdvicesList[weatherType] ?? "No advice"}
                </div>
                <div className="weatherAdviceLabel">
                    💡- {getWeatherRange()}
                </div>
            </div>
        </div>
    );
}

export default WeatherAdvisoryCard;