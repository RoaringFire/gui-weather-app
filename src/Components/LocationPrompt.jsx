import "../styles/LocationPromptStyles.css";
import { useState } from "react";
import LocationPin from "./vector_icons/LocationPin.jsx";
import axios from "axios";
import HomePage from "../HomePage.jsx";
import { Icon } from "@iconify/react";

function LocationPrompt() {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

    const [option, setOption] = useState("auto"); // option to either manually type the location or get the current location automatically
    const [locationsList, setLocationsList] = useState([]); // list to autocomplete locations fetched from the api
    const [isLocationSelected, setIsLocationSelected] = useState(false);
    

    // location information
    // use this to display the name of the location and send the coordinates of that location to the api
    const [locationName, setLocationName] = useState("");
    const [locationCoords, setLocationCoords] = useState([]);

    const [isFormError, setIsFormError] = useState(false);

    const [currentWeatherData, setCurrentWeatherData] = useState(null);
    const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
    const [airPollutionData, setairPollutionData] = useState(null);
    
    const getLocationAuto  = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocationCoords({latitude, longitude});
            console.log(locationCoords); // test to see the coordinates
            loadWeather(latitude, longitude);
        });
    };

    const getLocationByName = async (e) => {
        // get the first 5 results from the openweather's geocoding api
        // use this to location name suggestion as the user types in the manual location form
        setLocationName(e.target.value);

        const response = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${e.target.value}&count=5&language=en&format=json`
        );

        console.log(response.data["results"]); // printed the response to test whether i am getting the location data i want

        if(response.data && "results" in response.data)
            setLocationsList(response.data["results"]);
        else
            setLocationsList([])
    }; 

    const loadWeather = async (latitude, longitude) => {
        // get weather data for location by coordinates
        // used when the browser automatically detects the user's location
        try {
            const response = await axios.get( 
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            )
            setCurrentWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
        try {
            const response = await axios.get(
                `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
            )
            setHourlyWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }

        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            )
            setairPollutionData(response.data);
        } catch (error) {
            console.error(error)
        }
    };

    const loadWeatherFromManual = async () => {
        if(locationName === "" || !isLocationSelected) {
            setIsFormError(true);
            return;
        }

        setIsFormError(false);
        
        console.log(locationCoords);
        loadWeather(locationCoords[0], locationCoords[1])
    };

    if (airPollutionData) {
        return <HomePage 
            currentWeatherData={currentWeatherData} 
            hourlyWeatherData={hourlyWeatherData} 
            airPollutionData={airPollutionData}
        />;
    }
    
    return (  
        <>
            <div className="locationPrompt">
                <LocationPin size="60" />
                {option == "auto" ? <>
                    <p>To be able get the latest weather information in your area, allow Climmute to use your location, or you can enter your location manually.</p>
                    <button className="buttonPrimary" onClick={getLocationAuto}>Get current location</button>
                    <button className="buttonSecondary" onClick={() => setOption("manual")}>Enter manually</button>
                </>
                : <>
                    <p>Please enter your location here:</p>
                    {isFormError && 
                    <div className="formError">
                        <Icon icon="mdi:error-outline" fontSize="24"/>
                        Please select a valid location!
                    </div>}

                    <div className="locationForm">
                        <input 
                            type="text" 
                            value={locationName} 
                            onChange={(e) => {
                                getLocationByName(e);
                                setIsLocationSelected(false);
                            }}
                        />
                        <button className="buttonPrimary" onClick={() => loadWeatherFromManual()}>
                            <LocationPin size="20" />
                        </button>
                    </div>

                    { locationsList.length > 0 &&
                    <div className="searchDropdown">
                        {locationsList.map((l, i) => (
                            <button 
                                className="searchDropdownItem"
                                onClick={() => {
                                    setLocationName(`${l["name"]}, ${l["admin1"]}, ${l["country"]}`);
                                    setLocationCoords([ l["latitude"], l["longitude"] ]);
                                    setLocationsList([]);
                                    setIsLocationSelected(true);
                                }}
                            >
                                {l["name"]}, {l["admin1"]}, {l["country"]}
                            </button>
                        ))}
                    </div>
                    }
                    <button className="buttonSecondary" onClick={() => setOption("auto")}>&lt;&lt; Get location automatically</button>
                </>
                }
            </div>
        </>
    );
}

export default LocationPrompt;