import './style.scss';

import { useContext } from 'react';
import DegreeSwitcher from '../../atoms/DegreeSwitcher';
import DayCityInfo from '../../atoms/DayCityInfo';
import DividedInfo from '../DividedInfo';

import { WeatherContext } from "../../../contexts/WeatherContext"

const WeatherPanel = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <div className="weather__info">
      <div className="weather__main">
        <p className="weather__descr" id="description">{forecast.descr}</p>

        <DividedInfo
          LeftComponent={DegreeSwitcher}
          RightComponent={DayCityInfo} />

        <div className="weather__additional">
          <p>
            Humidity:
            <span id="humidity" className="weather__accent">{forecast.humidity}</span>%
          </p>
          <p>
            Wind:
            <span id="wind-speed" className="weather__accent">{forecast.windSpeed}</span>m/h
          </p>
        </div>
      </div>

      {forecast.weatherIcon && <forecast.weatherIcon className="weather__icon" id="icon" />}
    </div>
  );
}

export default WeatherPanel;