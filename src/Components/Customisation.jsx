import "../styles/SettingsStyles.css"
import { Icon } from "@iconify/react";
import { useData } from "./useData";
import { useState } from "react";

function Customisation({goBack}) {
  const [updateState, forceUpdate] = useState({});

  const { 
    data, 
    setTempUnit, 
    setRainUnit, 
    setWindspeedUnit, 
    toggleDarkMode,
    setWeatherAdviceVisible,
    setIsForecastVisible,
    setAirPollutionVisible,
    setWindSpeedVisible,
    setVisibilityMetricVisible,
    setPrecipitationVisible,
    setHumidityVisible,
    setSunsetTimeVisible,
    setCommuteConditionsVisible,
  } = useData();
  
  const onSettingTagClicked = (f, newVal) => {
    f(newVal);
    forceUpdate({});
  };

  return (
    <div className="settings_page">
      <div className="settings_header">
        <span className="back_button" onClick={goBack}><Icon icon="mdi:arrow-left" fontSize={30} /></span>
        <h1>Customisation</h1>
      </div>
    
      <div className="settings_section">
        <div className="widget">
          <span>Weather dashboard</span>
          <p>Click to set each widget to visible or invisible</p>
          <div className="tagsContainer">
            <button 
              className={`available_tag ${data.isForecastVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setIsForecastVisible, !data.isForecastVisible)}>
              <Icon icon="mdi:weather-rainy" />
              Weather forecast
            </button>
            <button 
              className={`available_tag ${data.weatherAdviceVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setWeatherAdviceVisible, !data.weatherAdviceVisible)}>
              <Icon icon="mdi:information-outline" />
              Weather conditions and advice
            </button>
            <button 
              className={`available_tag ${data.airPollutionVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setAirPollutionVisible, !data.airPollutionVisible)}>
              <Icon icon="material-symbols:air" />
              Air pollution metric
            </button>
            <button 
              className={`available_tag ${data.visibilityMetricVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setVisibilityMetricVisible, !data.visibilityMetricVisible)}>
              <Icon icon="gridicons:visible" />
              Visibility metric
            </button>
            <button 
              className={`available_tag ${data.windSpeedVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setWindSpeedVisible, !data.windSpeedVisible)}>
              <Icon icon="material-symbols:air" />
              Wind speed metric
            </button>
            <button 
              className={`available_tag ${data.precipitationVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setPrecipitationVisible, !data.precipitationVisible)}>
              <Icon icon="mdi:weather-pouring" />
              Precipitation 
            </button>
            <button 
              className={`available_tag ${data.humidityVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setHumidityVisible, !data.humidityVisible)}>
              <Icon icon="material-symbols:humidity-low-outline" />
              Humidity
            </button>
            <button 
              className={`available_tag ${data.sunsetTimeVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setSunsetTimeVisible, !data.sunsetTimeVisible)}>
              <Icon icon="mdi:weather-sunset" />
              Time of sunset
            </button>
            <button 
              className={`available_tag ${data.commuteConditionsVisible && "tag_latched"}`} 
              onClick={() => onSettingTagClicked(setCommuteConditionsVisible, !data.commuteConditionsVisible)}>
              <Icon icon="mdi:bus" />
              Commuting conditions
            </button>
          </div>
        </div> 
      </div>

    </div>
  )
}


export default Customisation;