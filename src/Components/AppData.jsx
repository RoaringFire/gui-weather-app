import {useState } from "react";
import { DataContext } from "./DataContext";

export const AppData = ({ children }) => {
  const [data, setData] = useState({
    tempUnit: "°C",
    windSpeedUnit: "ms",
    rainUnit: "mm",
    isDarkMode: true,
    isNotifications: true,
  });

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

  
  return (
    <DataContext.Provider value={{ data, setTempUnit,setRainUnit,setWindspeedUnit, toggleDarkMode, toggleNotifications }}>
      {children}
    </DataContext.Provider>
  );
};

