import WeatherPanel from '../../molecules/WeatherPanel';
import WeatherForecast from '../../molecules/WeatherForecast';

import './style.scss';

const WeatherCard = ({ timeOfDay }) => {
  return (
    <div className="weather" id="weather">
      <WeatherPanel />
      <WeatherForecast />
    </div>
  );
}

export default WeatherCard;