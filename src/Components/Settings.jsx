import "../styles/SettingsStyles.css"
import { Icon } from "@iconify/react";
import { useState } from "react";

function Settings({goBack}) {
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
        <h1>Settings</h1>
      </div>


      <div className="settings_section">
        <div className="setting_row">
          <span>Location</span>
          <label className="checkboxContainer">
            <input type="checkbox" className="checkbox" />
            <div className="checkmark" />
          </label>
        </div>

        <div className="setting_row">
          <span>Notifications</span>
          <label className="checkboxContainer">
            <input type="checkbox" className="checkbox" />
            <div className="checkmark" />
          </label>
        </div>   
          
        <div className="setting_row">
          <span>Dark Mode</span>
          <label className="checkboxContainer">
            <input type="checkbox" className="checkbox" />
            <div className="checkmark" />
          </label>
        </div>

        <div className="setting_row">
          <span>Temperature Units</span>
          <div className="customSelectContainer">
            <select className="selectBox">
              <option value="celsius">Celsius (°C)</option>
              <option value="fahrenheit">Fahrenheit (°F)</option>
            </select>
          </div>
        </div>

        <div className="setting_row">
          <span>Wind Speed Units</span>
          <div className="customSelectContainer">
            <select className="selectBox">
              <option value="mph">mph</option>
              <option value="kmh">km/h</option>
            </select>
          </div>
        </div>      
          
        <div className="setting_row">
          <span>Rain Units</span>
          <div className="customSelectContainer">
            <select className="selectBox">
              <option value="mm">mm</option>
              <option value="in">inches</option>
            </select>
          </div>
        </div>

        <div className="setting_row">
          <span>Low Battery Mode</span>
          <label className="checkboxContainer">
            <input type="checkbox" className="checkbox" />
            <div className="checkmark" />
          </label>
        </div> 
      </div>
    </div>
  )
}


export default Settings