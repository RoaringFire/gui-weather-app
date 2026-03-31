import { useState, useEffect } from "react";
import { DataContext } from "./DataContext.js";

export const AppData = ({ children }) => {
  const [data, setData] = useState(() => {
    // fallback settings in case the user has no settings saved or the settings is corrupte
    const defaults = {
      tempUnit: "°C",
      windSpeedUnit: "mph",
      rainUnit: "mm",
      isDarkMode: false,
      isNotifications: true,
      headerWeatherTheme: "default",
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
  }, [data.tempUnit, data.windSpeedUnit, data.rainUnit, data.isDarkMode, data.isNotifications, data.headerWeatherTheme])


  const setTempUnit = (newUnit) =>
    setData(prev => ({...prev, tempUnit: newUnit}))
  
  const setWindspeedUnit = (newUnit) =>
    setData(prev => ({...prev, windSpeedUnit : newUnit}))
  
  const setRainUnit = (newUnit) =>
    setData(prev => ({...prev, rainUnit : newUnit}))
  
  const toggleDarkMode = (newValue) =>
    setData(prev => ({...prev, isDarkMode : newValue}))
  
  const toggleNotifications = (newValue) =>
    setData(prev => ({...prev, isNotifications : newValue}))

  const setHeaderWeatherTheme = (newTheme) =>
    setData(prev =>({...prev, headerWeatherTheme : newTheme}))
  
  return (
    <DataContext.Provider value={{ data, setTempUnit,setRainUnit,setWindspeedUnit, toggleDarkMode, toggleNotifications, setHeaderWeatherTheme}}>
      {children}
    </DataContext.Provider>
  );
};

