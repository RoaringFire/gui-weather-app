import "../styles/SettingsStyles.css"
import { Icon } from "@iconify/react";
import { useData } from "./useData";

function Settings({goBack}) {

  const { data, setTempUnit,setWindspeedUnit,setRainUnit } = useData();

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
              value={data.windSpeedUnits}
              onChange={(e) => setWindspeedUnit(e.target.value)}
            >
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
              value={data.rainUnits}
              onChange={(e) => setRainUnit(e.target.value)}
            >
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