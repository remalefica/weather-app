import { createContext, useState } from "react";

import { ReactComponent as WeatherIcon } from "../assets/icons/01d.svg";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({
    weekDay: "Monday",
    date: "21 September",
    time: "14:11",
    city: "San Francisco",
    descr: "Sunny",
    weatherIcon:  WeatherIcon,
    tempC: "12",
    humidity: "78",
    windSpeed: "7"
  });

  return (
    <WeatherContext.Provider value={{ forecast, setForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;