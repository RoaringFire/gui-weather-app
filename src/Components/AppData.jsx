import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const AppData = ({ children }) => {
  const [data, setData] = useState(() => {
    // fallback settings in case the user has no settings saved or the settings is corrupte
    const defaults = {
      tempUnit: "°C",
      windSpeedUnit: "mph",
      rainUnit: "mm",
      isDarkMode: false,
      weatherAdviceVisible: true,
      isForecastVisible: true,
      airPollutionVisible: true,
      windSpeedVisible: true,
      visibilityMetricVisible: true,
      precipitationVisible: true,
      humidityVisible: true,
      sunsetTimeVisible: true,
      commuteConditionsVisible: true,
    };

    try {
      const settingsData = localStorage.getItem("settings");
      if (!settingsData) return defaults;

      const parsed = JSON.parse(settingsData);

      // if the data is blank or not an object, return the default values
      if (!parsed || typeof parsed !== "object")
        return defaults;

      return parsed;
    } catch {
      return defaults;
    }
  });

  // reloads component when isDarkMode changes
  useEffect(() => {
    if (data.isDarkMode) {
      document.documentElement.classList.add('darkMode');
    } else {
      document.documentElement.classList.remove('darkMode');
    }
  }, [data.isDarkMode]);


  useEffect(() => {
    // save settings data as cookie, so it persists even during reloads
    localStorage.setItem("settings", JSON.stringify(data));
  }, [data])


  const setTempUnit = (newUnit) =>
    setData(prev => ({...prev, tempUnit: newUnit}))
  
  const setWindspeedUnit = (newUnit) =>
    setData(prev => ({...prev, windSpeedUnit : newUnit}))
  
  const setRainUnit = (newUnit) =>
    setData(prev => ({...prev, rainUnit : newUnit}))
  
  const toggleDarkMode = (newValue) =>
    setData(prev => ({...prev, isDarkMode : newValue}))

  const setWeatherAdviceVisible = (newValue) =>
    setData(prev => ({...prev, weatherAdviceVisible : newValue}))
  
  const setIsForecastVisible = (newValue) =>
    setData(prev => ({...prev, isForecastVisible : newValue}))

  const setAirPollutionVisible = (newValue) =>
    setData(prev => ({...prev, airPollutionVisible : newValue}))

  const setWindSpeedVisible = (newValue) =>
    setData(prev => ({...prev, windSpeedVisible : newValue}))

  const setVisibilityMetricVisible = (newValue) =>
    setData(prev => ({...prev, visibilityMetricVisible : newValue}))

  const setPrecipitationVisible = (newValue) =>
    setData(prev => ({...prev, precipitationVisible : newValue}))

  const setHumidityVisible = (newValue) =>
    setData(prev => ({...prev, humidityVisible : newValue}))

  const setSunsetTimeVisible = (newValue) =>
    setData(prev => ({...prev, sunsetTimeVisible : newValue}))

  const setCommuteConditionsVisible = (newValue) =>
    setData(prev => ({...prev, commuteConditionsVisible : newValue}))


  return (
    <DataContext.Provider value={{ 
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
    }}>
      {children}
    </DataContext.Provider>
  );
};

