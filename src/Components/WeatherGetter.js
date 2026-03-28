import { useContext } from "react";
import DataContext from "./components/AppData.js"
import axios from 'axios';
const OPEN_WEATHER_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;

export const useWeather = () => {
  const { setData } = useContext(DataContext);

  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${OPEN_WEATHER_KEY}`
      );

      setData({
        temperature: response.data.main.temp,
        feelsLikeTemp: response.data.main.feels_like,
        currentWeather: response.data.weather[0].description,
      });

    } catch (error) {
      console.error(error);
    }
  };

  return { getWeather };
};