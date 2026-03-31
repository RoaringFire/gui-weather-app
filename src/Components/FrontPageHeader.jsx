import "../styles/FrontPageHeaderStyles.css"
import { useState, useEffect } from "react";
import { useData } from "./useData";

function WeatherDisplayMain({ menuOpen, openMenu, closeMenu, temp, feelsTemp, weatherType,cityName}) {
    const { data, setHeaderWeatherTheme } = useData();

    const convertFeelsTemp = (temperature) => {
        if (data.tempUnit === "°F") {
            return Math.round((temperature * 9) / 5 + 32); // C → F
        }
        return Math.round(temperature);
    };

    const convertedFeelsTemp = convertFeelsTemp(feelsTemp);
    const convertedCurrentTemp = convertFeelsTemp(temp);
    // prompt location access when the component is first loaded
    useEffect(()=> {
        getLocation();
    }, []);

     useEffect(()=> {
        let theme = "default";
        
        if (weatherType === "Clouds") {
            theme = "cloudy";
        } else if (weatherType === "Clear") {
            theme = "sunny";
        } else if (weatherType === "Rain") {
            theme = "rainy";
        } else if (weatherType === "Snow") {
            theme = "snowy";
        } else if (weatherType === "Thunderstorm") {
            theme = "thunderstorm";
        }  else if (weatherType === "Mist") {
            theme = "mist";
        } else if (weatherType === "Fog") {
            theme = "fog";
        } else if (weatherType === "Drizzle") {
            theme = "drizzle";
        }
      
        setHeaderWeatherTheme(theme);
    }, [weatherType]); //only change theme if the weather type changes so not updating unnecessarily

    const getWeatherClass = () => {
        return `WeatherDisplay ${data.headerWeatherTheme}`;
    }; /// deals with teh changing of header colour

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position)=>{
            const { latitude, longitude } = position.coords;
            setCurrentLocation({latitude, longitude});
        });
    };

    const triggerMenuOpen = () => {
        if(!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    const locationName= () =>{
        if (cityName === ""){
            return "You"
        }
        return cityName

    }

    const locationNameDisplay = locationName();

    return (
        <div className={getWeatherClass()}>
            <div className="TopBar">
                {!menuOpen ? <a type="button" className="menu" onClick={triggerMenuOpen}>☰</a> : <></>}
                <div className="Location">
                    <p > 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 6 16 6 16C6 16 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3Z" fill="black"/>
                        </svg>
                            {locationNameDisplay}  
                    </p>
                </div>
            </div>
            <div className="TemperatureSection">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="56" viewBox="0 0 24 71" fill="none">
                        <mask id="path-1-inside-1_16_32" fill="white">
                            <path d="M12 0C15.787 5.53166e-07 18.8572 3.29487 18.8574 7.35938C18.8574 7.50482 18.8525 7.64961 18.8447 7.79297H18.8574V51.2969C21.9653 53.2528 24 56.4995 24 60.1768C24 66.1542 18.6274 71 12 71C5.37258 71 0 66.1542 0 60.1768C2.42566e-05 56.4995 2.03471 53.2528 5.14258 51.2969V7.79297H5.15527C5.14752 7.64961 5.14258 7.50482 5.14258 7.35938C5.14277 3.29487 8.21302 0 12 0Z"/>
                        </mask>
                        <path d="M12 0L12 -4H12V0ZM18.8574 7.35938H22.8574V7.35919L18.8574 7.35938ZM18.8447 7.79297L14.8506 7.57694L14.6225 11.793H18.8447V7.79297ZM18.8574 7.79297H22.8574V3.79297H18.8574V7.79297ZM18.8574 51.2969H14.8574V53.5057L16.7269 54.6822L18.8574 51.2969ZM24 60.1768H28V60.1767L24 60.1768ZM0 60.1768L-4 60.1767V60.1768H0ZM5.14258 51.2969L7.27314 54.6822L9.14258 53.5057V51.2969H5.14258ZM5.14258 7.79297V3.79297H1.14258V7.79297H5.14258ZM5.15527 7.79297V11.793H9.37747L9.14944 7.57694L5.15527 7.79297ZM5.14258 7.35938L1.14258 7.35919V7.35938H5.14258ZM12 0L12 4C13.3163 4 14.8573 5.23316 14.8574 7.35956L18.8574 7.35938L22.8574 7.35919C22.8571 1.35658 18.2576 -4 12 -4L12 0ZM18.8574 7.35938H14.8574C14.8574 7.41546 14.8555 7.48587 14.8506 7.57694L18.8447 7.79297L22.8389 8.009C22.8495 7.81335 22.8574 7.59418 22.8574 7.35938H18.8574ZM18.8447 7.79297V11.793H18.8574V7.79297V3.79297H18.8447V7.79297ZM18.8574 7.79297H14.8574V51.2969H18.8574H22.8574V7.79297H18.8574ZM18.8574 51.2969L16.7269 54.6822C18.8294 56.0055 20 58.0513 20 60.1768L24 60.1768L28 60.1767C28 54.9477 25.1012 50.5001 20.988 47.9115L18.8574 51.2969ZM24 60.1768H20C20 63.5667 16.8166 67 12 67V71V75C20.4382 75 28 68.7417 28 60.1768H24ZM12 71V67C7.18336 67 4 63.5667 4 60.1768H0H-4C-4 68.7417 3.56181 75 12 75V71ZM0 60.1768L4 60.1768C4.00001 58.0513 5.17058 56.0055 7.27314 54.6822L5.14258 51.2969L3.01202 47.9115C-1.10117 50.5001 -3.99997 54.9477 -4 60.1767L0 60.1768ZM5.14258 51.2969H9.14258V7.79297H5.14258H1.14258V51.2969H5.14258ZM5.14258 7.79297V11.793H5.15527V7.79297V3.79297H5.14258V7.79297ZM5.15527 7.79297L9.14944 7.57694C9.14451 7.48587 9.14258 7.41546 9.14258 7.35938H5.14258H1.14258C1.14258 7.59418 1.15053 7.81335 1.16111 8.009L5.15527 7.79297ZM5.14258 7.35938L9.14258 7.35956C9.14268 5.23316 10.6837 4 12 4V0V-4C5.74239 -4 1.14286 1.35658 1.14258 7.35919L5.14258 7.35938Z" fill="black" mask="url(#path-1-inside-1_16_32)"/>
                    </svg>
                </div>
                <div className="Temp">{convertedCurrentTemp} {data.tempUnit}</div>
                <div className="Divider"></div>
                <div className="FeelsLike">Feels Like {convertedFeelsTemp} {data.tempUnit}</div>
            </div>
            <div className="Condition">
                <div>{weatherType == "Clear" ? "Sunny" : weatherType}</div>
                {weatherType == "Clear" && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
                        <circle cx="96" cy="96" r="96" fill="url(#paint0_radial_2_34)"/>
                        <circle cx="95.1273" cy="95.1273" r="79.4182" fill="#FFF700"/>
                        <defs>
                            <radialGradient id="paint0_radial_2_34" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(96 96) rotate(90) scale(96)">
                                <stop offset="0.764423" stop-color="#FFFB7B"/>
                                <stop offset="0.764523" stop-color="#FFFB7B"/>
                                <stop offset="1" stop-color="#FFF700" stop-opacity="0"/>
                            </radialGradient>
                        </defs>
                    </svg>
                )}
            </div>
        </div>
    )
}

export default WeatherDisplayMain