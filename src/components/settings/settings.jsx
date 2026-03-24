import "../../styles/Settings.css"
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
        <span className="back_button" onClick={goBack}><Icon icon="mdi:arrow-left" /></span>
        <h1>SETTINGS</h1>
      </div>


      <div className="settings_section">
        <div className="setting_row">
          <span>Location</span>
          <button onClick = {() => setLocationON(!LocationON)}>{LocationON ? "OFF" : "ON"}</button>
        </div>

        <div className="setting_row">
          <span>Notifications</span>
          <button onClick = {() => setNotificationsON(!NotificationsON)}>{NotificationsON ? "OFF" : "ON"}</button>
        </div>   
          
        <div className="setting_row">
          <span>Dark/Light Mode</span>
          <button onClick = {() => setDarkModeON(!DarkModeON)}>{DarkModeON ? "OFF" : "ON"}</button>
        </div>

        <div className="setting_row">
          <span>Temperature Units</span>
          <button onClick = {() => setTemperatureUnits(TemperatureUnits === "°C" ? "°F" : "°C")}> {TemperatureUnits} </button>
        </div>

        <div className="setting_row">
          <span>Wind Speed Units</span>
          <button onClick = {() => setWindSpeedUnits(WindSpeedUnits === "km/h" ? "mph" : "km/h")}>{WindSpeedUnits}</button>
        </div>      
          
        <div className="setting_row">
          <span>Rain Units</span>
          <button onClick = {() => setRainUnits(RainUnits === "mm" ? "inch" : "mm")}>{RainUnits}</button>
        </div>

        <div className="setting_row">
          <span>Low Battery Mode</span>
          <button onClick = {() => setLowBatteryModeON(!LowBatteryModeON)}>{LowBatteryModeON ? "OFF" : "ON"}</button>
        </div> 
      </div>

  

      <div className="settings_section">
        <div className="widget">
          <span>Commuting Conditions</span>
          <div className="tags">
            <span className="tag">
              <Icon icon="mdi:bus" />
              No transport delays
              <span className=" remove_item">✕</span>
            </span>
            <span className="tag">
              <Icon icon="mdi:umbrella" />
              Rain Risk Low
              <span className="remove_item">✕</span>
            </ span>
              <span className="tag">
              <Icon icon="mdi:lightbulb" />
              Advice: wear sunscreen till 3pm
              <span className=" remove_item">✕</span>
              </ span>
          </div>
        </div>

        <div className="widget">
          <span>Edit Commuting Conditions(press tick to add)</span>
          <div className="tags">
            <span className="available_tag">
              <Icon icon="mdi:road" />
              Road closure alerts
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:traffic-light" />
              Traffic delay time
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-fog" />
              Low visibility warning
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:alert" />
              Transport strike updates
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:road-variant" />
              Slippery road advisory
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:alert-circle" />
              Public transport cancellation
              <span className="tick_add">✓</span>
            </span>
          </div>
        </div> 
      </div>

      <div className="settings_section">
        <div className="widget">
          <span>Commute Impact</span>
          <div className="tags">
            <span className="red_tag">
              <Icon icon="mdi:bus" />
              Delayed
              <span className="remove_item">✕</span>
            </span>
            <span className="green_tag">
              <Icon icon="mdi:train" />
              Normal
              <span className="remove_item">✕</span>
            </span>
            <span className="blue_tag">
              <Icon icon="mdi:bicycle" />
              Good
              <span className="remove_item">✕</span>
            </span>
            <span className="tag">
              <Icon icon="mdi:humidity" />
              Humidity 45%
              <span className="remove_item">✕</span>
            </span>
            <span className="tag">
              <Icon icon="mdi:leaf" />
              Air Quality 2
              <span className="remove_item">✕</span>
            </span>
          </div>
        </div>

        <div className="widget">
          <span>Edit Commute Impact(press tick to add)</span>
          <div className="tags">
            <span className="available_tag">
              <Icon icon="mdi:weather-rainy" />
              Rain Probability 40%
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-windy" />
              Wind speed 16 km/h
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-drizzle" />
              Precipitation Intensity Light
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-sunny" />
              UV Index 2
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-pouring" />
              Precipitation Coverage 4mm
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:weather-sunset" />
              Sunset 18:34
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:car" />
              CAR
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:walk" />
              BY FOOT
              <span className="tick_add">✓</span>
            </span>
            <span className="available_tag">
              <Icon icon="mdi:motorbike" />
              MOTORCYCLE
              <span className="tick_add">✓</span>
            </span>
          </div>
        </div> 
      </div>

    </div>
  )
}


export default Settings