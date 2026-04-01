import { useState, useEffect } from "react";
import { DataContext } from "./DataContext";

export const AppData = ({ children }) => {
  const [data, setData] = useState(() => {
    // fallback settings in case the user has no settings saved or the settings is corrupte
    const defaults = {
      tempUnit: "°C",
      windSpeedUnit: "mph",
      rainUnit: "mm",
      visibilityUnit: "km",
      isDarkMode: false,
      minimumHotTemp: 20,
      minimumWarmTemp: 19,
      minimumChillyTemp: 18,
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
  }, [data.tempUnit, data.windSpeedUnit, data.rainUnit, data.isDarkMode,data.minimumHotTemp,data.minimumWarmTemp,data.minimumChillyTemp])


  const setTempUnit = (newUnit) =>
    setData(prev => ({...prev, tempUnit: newUnit}))
  
  const setWindspeedUnit = (newUnit) =>
    setData(prev => ({...prev, windSpeedUnit : newUnit}))
  
  const setRainUnit = (newUnit) =>
    setData(prev => ({...prev, rainUnit : newUnit}))

  const setVisibilityUnit = (newUnit) =>
    setData(prev => ({...prev, visibilityUnit : newUnit}))
  
  const toggleDarkMode = (newValue) =>
    setData(prev => ({...prev, isDarkMode : newValue}))

  const setMinimumHotTemp = (newValue) => {
    setData(prev => ({
      ...prev,
      minimumHotTemp: newValue
    }));
  };

  const setMinimumWarmTemp = (newValue) => {
    setData(prev => {
      let minimumHotTemp = prev.minimumHotTemp;

      if (newValue >= minimumHotTemp) {
        minimumHotTemp = newValue + 1;
      }

      return {
        ...prev,
        minimumWarmTemp: newValue,
        minimumHotTemp
      };
    });
  };

  const setMinimumChillyTemp = (newValue) => {
    setData(prev => {
      let minimumWarmTemp = prev.minimumWarmTemp;
      let minimumHotTemp = prev.minimumHotTemp;

      if (newValue >= minimumWarmTemp) {
        minimumWarmTemp = newValue + 1;
      }

      if (minimumWarmTemp >= minimumHotTemp) {
        minimumHotTemp = minimumWarmTemp + 1;
      }

      return {
        ...prev,
        minimumChillyTemp: newValue,
        minimumWarmTemp,
        minimumHotTemp
      };
    });
  };
      
  
  return (
    <DataContext.Provider value={{ 
        data, 
        setTempUnit,
        setRainUnit,
        setWindspeedUnit, 
        toggleDarkMode,
        setMinimumHotTemp, 
        setMinimumWarmTemp,
        setMinimumChillyTemp,
        setVisibilityUnit
      }}>
      {children}
    </DataContext.Provider>
  );
};

