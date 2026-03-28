import "../styles/SettingsStyles.css"
import { Icon } from "@iconify/react";
import { useState } from "react";

function Customisation({goBack}) {
  const [LocationON, setLocationON] = useState(true)
  const [NotificationsON, setNotificationsON] = useState(true)
  const [DarkModeON, setDarkModeON] = useState(true)
  const [TemperatureUnits, setTemperatureUnits] = useState("°C")
  const [WindSpeedUnits, setWindSpeedUnits] = useState("km/h")
  const [RainUnits, setRainUnits] = useState("mm")
  const [LowBatteryModeON, setLowBatteryModeON] = useState(true)
  const [CommutingConditions, setCommutingConditions] = useState(["No transport delays", "Rain Risk Low", "Advice: wear sunscreen till 3pm"])
  const [ExtraConditions, setExtraConditions] = useState(["Road closure alerts", "Traffic delay time", "Low visibility warning", "Transport strike updates", "Slippery road advisory", "Public transport cancellation"])
  const [CommuteImpactConditions, setCommuteImpactConditions] = useState(["Delayed", "Normal", "Good", "Humidity 45%", "Air Quality 2"]);
  const [ExtraCommuteImpactConditions, setExtraCommuteImpactConditions] = useState(["Rain Porbability 40%", "Precipitations Intensity Light", "Wind Speed 16 km/h", "UV index 2", "Car", "By foot", "Motorcycle", "Precipitation Coverage Light", "Sunset 16:34"]);


  return (
    <div className="settings_page">
      <div className="settings_header">
        <span className="back_button" onClick={goBack}><Icon icon="mdi:arrow-left" fontSize={30} /></span>
        <h1>Customisation</h1>
      </div>
    

      <div className="settings_section">
        <div className="widget">
          <span>Commute Impact</span>
          <div className="tagsContainer">
            <button className="available_tag red_tag">
              <Icon icon="mdi:bus" />
              Delayed
              <span className="remove_item">✕</span>
            </button>
            <button className="available_tag green_tag">
              <Icon icon="mdi:train" />
              Normal
              <span className="remove_item">✕</span>
            </button>
            <button className="available_tag blue_tag">
              <Icon icon="mdi:bicycle" />
              Good
              <span className="remove_item">✕</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:humidity" />
              Humidity 45%
              <span className="remove_item">✕</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:leaf" />
              Air Quality 2
              <span className="remove_item">✕</span>
            </button>
          </div>
        </div>

        <div className="widget">
          <span>Edit weather metrics</span>
          <div className="tagsContainer">
            <button className="available_tag">
              <Icon icon="mdi:weather-rainy" />
              Rain Probability 40%
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:weather-windy" />
              Wind speed 16 km/h
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:weather-drizzle" />
              Precipitation Intensity Light
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:weather-sunny" />
              UV Index 2
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:weather-pouring" />
              Precipitation Coverage 4mm
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:weather-sunset" />
              Sunset 18:34
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:car" />
              CAR
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:walk" />
              BY FOOT
              <span className="tick_add">✓</span>
            </button>
            <button className="available_tag">
              <Icon icon="mdi:motorbike" />
              MOTORCYCLE
              <span className="tick_add">✓</span>
            </button>
          </div>
        </div> 
      </div>

    </div>
  )
}


export default Customisation;