import {useState } from "react";
import { DataContext } from "./DataContext";

export const AppData = ({ children }) => {
  const [data, setData] = useState({
    tempUnit: "°C",
    windSpeedUnit: "mph",
    rainUnit: "mm",
  });

  const setTempUnit = (newUnit) =>
    setData(prev => ({...prev, tempUnit: newUnit}))
  
  const setWindspeedUnit = (newUnit) =>
    setData(prev => ({...prev, windSpeedUnit : newUnit}))
  
  const setRainUnit = (newUnit) =>
    setData(prev => ({...prev, rainUnit : newUnit}))
  
  return (
    <DataContext.Provider value={{ data, setTempUnit,setRainUnit,setWindspeedUnit }}>
      {children}
    </DataContext.Provider>
  );
};

