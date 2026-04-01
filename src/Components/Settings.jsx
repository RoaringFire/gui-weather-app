import "../styles/SettingsStyles.css"
import { Icon } from "@iconify/react";
import { useData } from "./useData";

function Settings({goBack}) {

  const { data, setTempUnit,setWindspeedUnit,setRainUnit,toggleDarkMode,setMinimumHotTemp,setMinimumWarmTemp,setMinimumChillyTemp,setVisibilityUnit } = useData();

  return (
    <div className="settings_page">
      <div className="settings_header">
        <span className="back_button" onClick={goBack}><Icon icon="mdi:arrow-left" fontSize={30} /></span>
        <h1>Settings</h1>
      </div>

      <div className="settings_section">
        <div className="setting_row">
          <span>Dark Mode</span>
          <label className="checkboxContainer">
            <input 
              type="checkbox" 
              className="checkbox" 
              checked= {data.isDarkMode}
              onChange={(e) => toggleDarkMode(e.target.checked)}
            />
            <div className="checkmark" />
          </label>
        </div>

        <div className="setting_row">
          <span>Temperature Units</span>
          <div className="customSelectContainer">
            <select 
              className="selectBox"
              value={data.tempUnit}
              onChange={(e) => setTempUnit(e.target.value)}
            >
              <option value="°C">Celsius (°C)</option>
              <option value="°F">Fahrenheit (°F)</option>
            </select>
          </div>
        </div>

        <div className="setting_row">
          <span>Wind Speed Units</span>
          <div className="customSelectContainer">
            <select 
              className="selectBox"
              value={data.windSpeedUnit}
              onChange={(e) => setWindspeedUnit(e.target.value)}
            >
              <option value="m/s">m/s</option>
              <option value="mph">mph</option>
              <option value="kmh">km/h</option>
            </select>
          </div>
        </div>      
          
        <div className="setting_row">
          <span>Rain Units</span>
          <div className="customSelectContainer">
            <select 
              className="selectBox"
              value={data.rainUnit}
              onChange={(e) => setRainUnit(e.target.value)}
            >
              <option value="mm">mm</option>
              <option value="in">inches</option>
            </select>
          </div>
        </div>

        <div className="setting_row">
          <span>Visibility Units</span>
          <div className="customSelectContainer">
            <select 
              className="selectBox"
              value={data.visibilityUnit}
              onChange={(e) => setVisibilityUnit(e.target.value)}
            >
              <option value="km">km</option>
              <option value="mile">miles</option>
            </select>
          </div>
        </div>

        <div className="setting_row">
          <span>Min Hot temp</span>
          <div className="customSelectContainer">
            <input
                type="number"
                className="numberInput"
                value={data.minimumHotTemp}
                onChange={(e) => setMinimumHotTemp(Number(e.target.value))}
              />
          </div>
        </div>

        <div className="setting_row">
          <span>Min Warm temp</span>
          <div className="customSelectContainer">
            <input
                type="number"
                className="numberInput"
                value={data.minimumWarmTemp}
                onChange={(e) => setMinimumWarmTemp(Number(e.target.value))}
              />
          </div>
        </div>

        <div className="setting_row">
          <span>Min Chilly temp</span>
          <div className="customSelectContainer">
            <input
                type="number"
                className="numberInput"
                value={data.minimumChillyTemp}
                onChange={(e) => setMinimumChillyTemp(Number(e.target.value))}
              />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Settings