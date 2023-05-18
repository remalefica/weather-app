import './style.scss';

import { useContext } from 'react';
import { WeatherContext } from '../../../contexts/WeatherContext';

const DegreeSwitcher = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <div className="degree-switcher">
      <span id="temp">{forecast.tempC}</span>
      <sup>
        <a href="#" id="metric" className="degree-active">℃</a>
      </sup>
      <sup>
        <a href="#" id="imperial">℉</a>
      </sup>
    </div>
  );
}

export default DegreeSwitcher;