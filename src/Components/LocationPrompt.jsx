import { useState } from "react";
import LocationPin from "./vector_icons/LocationPin.jsx";
import axios from "axios";
import "../styles/LocationPromptStyles.css";
import HomePage from "../HomePage.jsx";

function LocationPrompt() {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

    const [option, setOption] = useState("auto"); // option to either manually type the location or get the current location automatically
    const [locationsList, setLocationsList] = useState([]); // list to autocomplete locations fetched from the api
    const [locationSelected, setLocationSelected] = useState(false);

    // location information
    // use this to display the name of the location and send the coordinates of that location to the api
    const [locationName, setLocationName] = useState("");
    const [locationCoords, setLocationCoords] = useState({});

    const [weatherData, setWeatherData] = useState(null);

    const getLocationAuto  = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocationCoords({latitude, longitude});
            loadHomepageLocation(latitude, longitude)
        });
    };

    const getLocationByName = async (e) => {
        // get the first 5 results from the openweather's geocoding api
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

    const loadHomepageLocation = async (longitude,latitude) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            )
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loadHomepageName = async (cityName) => {

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
            )
            setWeatherData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (weatherData) {
        console.log(weatherData)
        return <HomePage weatherData={weatherData} />;
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
                    <div className="locationForm">
                        <input 
                            type="text" 
                            value={locationName} 
                            onChange={(e) => {
                                getLocationByName(e);
                                setLocationSelected(false);
                            }}
                        />
                        <button className="buttonPrimary" onClick={() => {
                            loadHomepageName(locationName)
                        }}><LocationPin size="20" /></button>
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
                                    setLocationSelected(true);
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