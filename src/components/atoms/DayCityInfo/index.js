import './style.scss';

import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { WeatherContext } from '../../../contexts/WeatherContext';

const DayCityInfo = () => {
  const { forecast } = useContext(WeatherContext);

  return (
    <div className="weather__city">
      <p id="current-date">
        {forecast.weekDay}, {forecast.date} {forecast.time}
      </p>
      <p className="weather__city-name">
        <FontAwesomeIcon icon={faLocationDot} />
        <span id="current-city">{forecast.city}</span>
      </p>
    </div>
  );
}

export default DayCityInfo;