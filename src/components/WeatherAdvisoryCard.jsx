import WeatherPartlyCloudy from "./vector_icons/WeatherPartlyCloudy.jsx"

var tempAdvicesList = {
    "freezing": "It's freezing! Wear gloves, a scarf and a thick coat before your journey.",
    "chilly": "It's cold. Wear a warm jacket or sweater before your journey",
    "warm": "It's pleasantly warm. Wear clothing you can easily remove, such as light jackets and hoodies.",
    "hot": "It's hot! Stay hydrated and bring a bottle of water, and wear light clothing.", 
};

var weatherAdvicesList = {
    "rainy": [
        "Don't get wet! Bring an umbrella, raincoat and waterproof shoes for your journey.",
        "Expect potential delays with bus and rail. Allow plenty of time for your journey.",
    ],
    "sunny": [
        "Avoid direct contact with the sunlight during the day when possible.",
    ],
    "windy": [
        "Expect potential delays with rail transport and allow ample time for your journey.",
        "Secure loose items well, including umbrellas, paper and clothing before proceeding.",
        "Stay clear of construction areas. Sudden gusts of wind can unsettle them."
    ],
    "thunderstorm": [
        "Stay safe! Use public transport when possible.",
        "Avoid waiting near metal poles, railings and inside open spaces."
    ],
    "cloudy": [
        "Be aware of sudden temperature changes and short showers at later times.",
        "Try and bring additional clothing with you in case of any sudden weather changes."
    ],
    "snow": [
        "Expect major delays with most public transport, including bus and rail. Allow ample journey time.",
        "Snow can be slippery! Wear a pair of good grip shoes before your journey."
    ],
    "fog": [
        "Low visibility conditions. Expect public transport delays and allow ample time for your journey.",
        "Stay alert at crossings and platforms for any oncoming traffic."
    ]
};

function WeatherAdvisoryCard({onDragStart}) {
    // hardcoded stuff - this will be replaced with dynamic content. add the actual data as parameters here
    return (  
        <div className="advisoryCard weatherAdvisory" onDragStart={onDragStart} draggable>
            <div>
                <div className="advisoryHeader">Weather conditions</div>
                <p>Partly cloudy conditions expected for the rest of the day.</p>
                <p><strong>Advice:</strong></p>
                <div className="weatherAdviceLabel">
                    💡- Additional clothing (e.g. rainwear and warm clothing) may not be necessary.
                </div>
                <div className="weatherAdviceLabel">
                    💡- Stay hydrated! Bring a bottle of water or two for your journey.
                </div>
                <div className="weatherAdviceLabel">
                    💡- Be aware of possible sudden temperature changes at later times.
                </div>
            </div>
        </div>
    );
}

export default WeatherAdvisoryCard;